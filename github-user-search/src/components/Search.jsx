import React, { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await searchUsers(query, { location, repos, page });
      
      // fetch details for each user (to get location + repos)
      const detailedResults = await Promise.all(
        data.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return {
            ...user,
            location: details.location,
            public_repos: details.public_repos,
          };
        })
      );

      setResults(detailedResults);
    } catch (err) {
      setError("Looks like we can't find any users with that criteria.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setPage((prev) => prev + 1);
    try {
      const data = await searchUsers(query, { location, repos, page: page + 1 });
      const detailedResults = await Promise.all(
        data.items.map(async (user) => {
          const details = await fetchUserData(user.login);
          return {
            ...user,
            location: details.location,
            public_repos: details.public_repos,
          };
        })
      );
      setResults((prev) => [...prev, ...detailedResults]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Minimum repos (e.g. >5)"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {/* Results */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <p> {user.location || "N/A"}</p>
              <p> {user.public_repos} repos</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {results.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 bg-gray-800 text-white py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;