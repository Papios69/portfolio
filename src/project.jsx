import { useState } from "react";

const PROJECTS = [
  {
    id: "snake",
    title: "Snake Game",
    image: "/snake-game.png",
    short:
      "A classic Snake game built in Unity using C#, focused on movement, scoring, and collision.",
    tech: "Unity · C#",
    bullets: [
      "Implemented grid-based movement, food spawning, and growth logic.",
      "Handled collision detection for walls and self-collision with clear game-over states.",
      "Added scoring and reset functionality to quickly restart runs for testing.",
    ],
    extra:
      "This project helped me practice core programming concepts, debugging, and building a full gameplay loop from start to finish.",
  },
  {
    id: "platformer",
    title: "2D Platformer",
    image: "/platformer.png",
    short:
      "A 2D side-scrolling platformer featuring custom levels, movement, and basic combat.",
    tech: "Unity · Level Design",
    bullets: [
      "Designed and built multiple levels using tilemaps and Unity’s 2D tools.",
      "Implemented character movement with jump, double jump, and dash.",
      "Experimented with simple enemy AI and hazards to introduce challenge.",
    ],
    extra:
      "Working on this platformer gave me experience with Unity physics, level design, and tuning movement so it feels responsive.",
  },
  {
    id: "rpg-town",
    title: "RPG Maker Town Demo",
    image: "/rpg-town.png",
    short:
      "A custom town built in RPG Maker MV with shops, an inn, and interactive NPCs.",
    tech: "RPG Maker MV",
    bullets: [
      "Created a town layout with interior and exterior maps, including a bar, inn, and shop.",
      "Scripted basic events for NPC dialogue, item purchases, and simple quests.",
      "Experimented with pacing, world-building, and how players explore a small hub.",
    ],
    extra:
      "This demo is an ongoing experiment in RPG-style storytelling and event-driven gameplay, letting me explore narrative ideas alongside technical work.",
  },
];

export default function Project() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          Click a project to expand and see more details, like a product page.
        </p>
      </header>

      <div className="grid grid-3">
        {PROJECTS.map((project) => {
          const isActive = activeId === project.id;

          return (
            <article
              key={project.id}
              className={`project-card card ${
                isActive ? "project-card--active" : ""
              }`}
              onClick={() => handleToggle(project.id)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <h2 className="project-card__title">{project.title}</h2>

              <p className="project-card__meta">{project.short}</p>

              <span className="tag">{project.tech}</span>

              {isActive && (
                <div className="project-card__details">
                  <h3>What I worked on</h3>
                  <ul>
                    {project.bullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <h3>Overview</h3>
                  <p>{project.extra}</p>
                </div>
              )}

              <button
                type="button"
                className="project-card__cta"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(project.id);
                }}
              >
                {isActive ? "Hide details" : "View details"}
                <span>{isActive ? "▲" : "▼"}</span>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
