import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to My Portfolio</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Hello, I'm Saqib Taha. I'm passionate about building software, games, and interactive applications. This Portfolio showcases my projects, skills, and experience.
      </p>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        My goal: To learn, improve, and create solutions that bring
        ideas to life through technology.
      </p>

      <Link
        to="/about"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Learn More About Me
      </Link>
    </div>
  );
}
