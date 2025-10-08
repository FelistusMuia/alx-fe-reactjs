import React, { useState } from "react";

function RegistrationForm() {
  // Individual states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Explicit field checks as required
    if (!username) {
      setErrors("Username is required!");
      return;
    }

    if (!email) {
      setErrors("Email is required!");
      return;
    }

    if (!password) {
      setErrors("Password is required!");
      return;
    }

    // Clear previous errors
    setErrors("");

    // Simulate API submission
    console.log("Form submitted:", { username, email, password });

    // Reset form
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

        {/* Show error message */}
        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;