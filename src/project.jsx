export default function Project() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      <div style={{ display: "grid", gap: "2rem", marginTop: "1.5rem" }}>
        
        {/* Project 1 */}
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <img
            src="/snake-game.png"
            alt="Snake Game"
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h2>Snake Game</h2>
          <p>
            A simple Snake game built in Unity using C#. I developed the movement system,
            collision detection, scoring, and reset functionality. This project helped me
            practice core programming concepts and strengthen my debugging skills.

          </p>
        </div>

        {/* Project 2 */}
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <img
            src="/platformer.png"
            alt="2D Platformer"
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h2>2D Platformer</h2>
          <p>
            A side-scrolling platformer game created in Unity. I designed and built levels,
            implemented character movement, and added mechanics such as double jump and dash.
            This project gave me valuable experience with Unity's physics system and
            tilemaps.
          </p>
        </div>

        {/* Project 3 */}
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <img
            src="/rpg-town.png"
            alt="RPG Maker Town"
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h2>RPG Maker Town Demo</h2>
          <p>
            A custom town built in RPG Maker MV, featuring shops, an inn, and interactive
            NPCs. I scripted basic events and experimented with dialogue design. This
            project is still under development, serving as an ongoing experiment in
            RPG-style storytelling and event-driven gameplay.
          </p>
        </div>

      </div>
    </div>
  );
}
