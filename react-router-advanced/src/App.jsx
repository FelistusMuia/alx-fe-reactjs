import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          background: "#f0f0f0",
          padding: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post (Example)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Nested routes */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;