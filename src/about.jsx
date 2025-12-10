export default function About() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Game programming student exploring gameplay, web, and AI.
        </p>
      </header>

      <div className="card about-layout">
        <div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="avatar"
          />
        </div>

        <div>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.7 }}>
            Hi, my name is <strong>Saqib</strong> and I am currently studying{" "}
            <strong>Software Engineering Technology – Game Programming</strong>{" "}
            at Centennial College, working towards my Advanced Diploma. I have a
            strong interest in game development, web technologies, software
            design, and AI.
          </p>

          <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "#9ca3af" }}>
            Outside of school projects, I enjoy building 2D games and exploring
            creative uses of AI image generation tools in workflows. I’m
            constantly learning and improving my skills so I can contribute to
            exciting, polished interactive experiences.
          </p>

          <a
            href="/SaqibTaha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: "1.25rem" }}
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
