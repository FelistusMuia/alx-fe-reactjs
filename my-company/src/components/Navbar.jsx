import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
        <li><Link to="/services" style={{ textDecoration: "none" }}>Services</Link></li>
        <li><Link to="/contact" style={{ textDecoration: "none" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;