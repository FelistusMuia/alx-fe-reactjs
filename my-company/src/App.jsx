import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";   //  new import
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>My Website</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />   {/* new route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;