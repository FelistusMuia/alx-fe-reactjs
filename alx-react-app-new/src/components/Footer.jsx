function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",     // dark background
        color: "#fff",               // white text
        padding: "15px",
        textAlign: "center",
        marginTop: "30px",
        borderTop: "4px solid #ff6600"
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © 2025 My React App. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;