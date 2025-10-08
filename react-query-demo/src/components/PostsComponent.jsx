import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // React Query hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Data stays fresh for 5 seconds (for demo)
    cacheTime: 1000 * 60 * 5, // Cached for 5 minutes
  });

  // Loading state
  if (isLoading) return <p>Loading posts...</p>;
  // Error state
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts from JSONPlaceholder</h2>

      {/* Refetch button */}
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          padding: "8px 16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {/* Post list */}
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Info about caching */}
      <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
        Tip: Navigate away and come back — data will load instantly from cache
        unless it's stale!
      </p>
    </div>
  );
}

export default PostsComponent;