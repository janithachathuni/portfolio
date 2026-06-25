import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "SurplusStays",
    type: "Group Project",
    tagline: "Food Waste Reduction Platform",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "A platform that connects consumers with stores selling discounted near-expiry food products, reducing waste while saving money.",
    bullets: [
      "Conducted feasibility study and documented requirements with SRS.",
      "Built customer-facing UI for purchasing discounted near-expiry products.",
      "Integrated workflows to allow users to order and buy food from stores, online.",
    ],
    github: "https://github.com/PamaliWeerasinghe/SurplusStays",
    accent: "#4ade80",
  },
  {
    id: 2,
    title: "JourneyQ",
    type: "Group Project",
    tagline: "Travel Planning & Marketplace Platform",
    stack: ["React", "JavaScript"],
    description:
      "A travel marketplace where service providers can list offerings and travelers can plan and book complete trips.",
    bullets: [
      "Designed and built UI components for service providers, enhancing usability.",
      "Collaborated with team to integrate marketplace features and trip planning modules.",
    ],
    github: "https://github.com/Journey-Q/journeyq_service_providers_frontend",
    accent: "#60a5fa",
  },
  {
    id: 3,
    title: "Kurullo",
    type: "Solo Project",
    tagline: "Bird Tracking Platform",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "A community platform for birdwatchers featuring photo-blogging, checklist tracking, and discussion forums built on the MERN stack.",
    bullets: [
      "Developed a platform for birdwatchers with photo-blogging, checklist tracking, and forums.",
      "Implemented REST APIs for data management.",
      "Used MERN stack application with MVC architecture.",
    ],
    github: "https://github.com/janithachathuni/birding",
    accent: "#f59e0b",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <span className="projects-eyebrow">Selected Work</span>
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const isOpen = active === project.id;
          return (
            <div
              key={project.id}
              className={`project-card ${isOpen ? "project-card--open" : ""}`}
              style={{ "--accent": project.accent }}
              onClick={() => setActive(isOpen ? null : project.id)}
            >
              <div className="project-card-top">
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-toggle">{isOpen ? "−" : "+"}</div>
              </div>

              <h3 className="project-name">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>

              <div className={`project-details ${isOpen ? "project-details--visible" : ""}`}>
                <p className="project-description">{project.description}</p>
                <ul className="project-bullets">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              </div>

              <div className="project-accent-bar" />
            </div>
          );
        })}
      </div>

      <style>{`
        .projects-section {
          padding: 80px 48px;
          width: 100%;
          background-color: #f4f3ee;
        }

        .projects-header {
          max-width: 1100px;
          margin: 0 auto 48px auto;
        }

        .projects-eyebrow {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0d244d;
          margin-bottom: 8px;
        }

        .projects-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          color: #214e34;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .project-card {
          position: relative;
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 28px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.2s;
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .project-card--open {
          border-color: var(--accent);
        }

        .project-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-type {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 600;
        }

        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .stack-tag {
          font-size: 0.7rem;
          padding: 3px 8px;
          background: #1e1e1e;
          border: 1px solid #333;
          border-radius: 4px;
          color: #0d244d;
        }

        .project-toggle {
          font-size: 1.4rem;
          color: #0d244d;
          line-height: 1;
          transition: color 0.2s;
          flex-shrink: 0;
          margin-left: 12px;
        }

        .project-card:hover .project-toggle,
        .project-card--open .project-toggle {
          color: var(--accent);
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #214e34;
          margin: 0 0 6px;
        }

        .project-tagline {
          font-size: 0.88rem;
          color: #0d244d;
          margin: 0;
        }

        .project-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .project-details--visible {
          max-height: 500px;
          opacity: 1;
        }

        .project-description {
          font-size: 0.88rem;
          color: #0d244d;
          line-height: 1.65;
          margin: 20px 0 14px;
        }

        .project-bullets {
          padding-left: 18px;
          margin: 0 0 20px;
        }

        .project-bullets li {
          font-size: 0.84rem;
          color: #0d244d;
          line-height: 1.6;
          margin-bottom: 6px;
        }

        .project-link {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          letter-spacing: 0.04em;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }

        .project-link:hover {
          border-color: var(--accent);
        }

        .project-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 0;
          background: var(--accent);
          transition: width 0.3s ease;
          border-radius: 0 0 0 12px;
        }

        .project-card:hover .project-accent-bar,
        .project-card--open .project-accent-bar {
          width: 100%;
        }

        @media (max-width: 600px) {
          .projects-section {
            padding: 60px 24px;
          }

          .projects-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;