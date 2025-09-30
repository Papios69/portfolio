import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <header style={{ background: "#222", padding: "1rem 2rem" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          color: "#fff",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#f5f5f5",
            marginRight: "2rem",
          }}
        >
          My Portfolio
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/education">Education</NavItem>
          <NavItem to="/project">Projects</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      </nav>
    </header>
  );
}

// Link with hover effect
function NavItem({ to, children }) {
  const baseStyle = {
    color: "#f5f5f5",
    textDecoration: "none",
    fontWeight: "500",
    padding: "0.5rem 0.75rem",
    borderRadius: "5px",
    transition: "all 0.3s ease",
  };

  return (
    <Link
      to={to}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#333";
        e.target.style.color = "#ddd";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#f5f5f5";
      }}
    >
      {children}
    </Link>
  );
}
