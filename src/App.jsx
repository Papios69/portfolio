import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Education from "./education.jsx";
import Project from "./project.jsx";
import Services from "./services.jsx";

function App() {
  return (
    <Router>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            <NavLink to="/">Saqib Taha</NavLink>
          </div>

          <div className="nav-links">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              About
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link--active" : "")
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
