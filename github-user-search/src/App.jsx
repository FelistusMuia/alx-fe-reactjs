import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);      // store user data
  const [loading, setLoading] = useState(false); // track loading
  const [error, setError] = useState(null);      // track error

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;