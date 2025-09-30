export default function About() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>About Me</h1>

      <img
        src="/profile.jpg" 
        alt="Profile"
        style={{ width: "200px", borderRadius: "50%", margin: "1rem 0" }}
      />

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        Hi, my name is <strong>Saqib</strong> and I am currently studying
        <strong> Software Engineering Technology - Game Programming</strong> at
        Centennial College, working towards my Advanced Diploma. I have a strong
        interest in game development, web technologies, software design and AI.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        Outside of school projects, I enjoy building 2D games and exploring
        creative uses of AI image generation tools in workflows. 
        I am constantly 	learning and improving my skills so I can contribute to exciting new projects.
      </p>

      <a
        href="/SaqibTaha_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#28a745",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        View My Resume
      </a>
    </div>
  );
}
