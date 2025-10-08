import React, { useState } from "react";

function RegistrationForm() {
  // Separate states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // Simulate form submission
    console.log("Form Submitted:", { username, email, password });

    // Clear form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;