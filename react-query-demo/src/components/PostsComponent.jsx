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
    staleTime: 5000, // data stays fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // cached for 5 minutes
    refetchOnWindowFocus: true, // ✅ Refetch when user switches back to tab
    keepPreviousData: true, // ✅ Keep old data while fetching new data
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

      <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
        Tip: Navigate away or switch browser tabs — React Query will handle
        caching and automatic refetching seamlessly.
      </p>
    </div>
  );
}

export default PostsComponent;