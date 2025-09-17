import React, { useState } from "react";


function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return; // avoid empty search
    onSearch(username);
    setUsername(""); // clear input after search
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 15px",
          border: "none",
          borderRadius: "4px",
          background: "#24292e",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
