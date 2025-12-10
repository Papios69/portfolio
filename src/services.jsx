export default function Services() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Services</h1>
        <p className="page-subtitle">
          Areas where I can meaningfully contribute to a project or team.
        </p>
      </header>

      <div className="card">
        <ul className="list">
          <li>
            <div className="list-title">Game Development</div>
            <div className="list-meta">
              Unity, C#, and RPG Maker – prototyping mechanics, systems, and
              small playable experiences.
            </div>
          </li>

          <li>
            <div className="list-title">Web Development</div>
            <div className="list-meta">
              React, HTML, CSS, JavaScript – building responsive, clean UI
              front-ends.
            </div>
          </li>

          <li>
            <div className="list-title">Database & Backend</div>
            <div className="list-meta">
              MongoDB and basic REST APIs for storing data and connecting UI to
              backend logic.
            </div>
          </li>

          <li>
            <div className="list-title">Programming & Debugging</div>
            <div className="list-meta">
              Java, C#, Python – reading code, tracking down issues, and
              improving clarity.
            </div>
          </li>

          <li>
            <div className="list-title">AI Workflow Exploration</div>
            <div className="list-meta">
              Integrating AI image tools like ComfyUI into creative workflows
              and prototypes.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
