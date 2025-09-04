import React from "react";
import "./App.css";

/* ===== Projects shown as cards ===== */
const projects = [
  {
    title: "Frontend Portfolio (HTML/CSS/JS)",
    description:
      "Black & white minimalist site showcasing JavaScript projects and UI work.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://ayan-dini1.github.io/portfolio/",
    repo: "https://github.com/Ayan-Dini1/portfolio",
  },
  {
    title: "React Portfolio (this site)",
    description:
      "Portfolio built with React and deployed on Vercel. Clean layout and responsive design.",
    stack: ["React", "CSS"],
    demo: "https://react-portfolio-ten-lilac-30.vercel.app/",
    repo: "https://github.com/Ayan-Dini1/react-portfolio",
  },
  {
    title: "Job Tracker App",
    description:
      "Track job applications with status, notes, search/filter, and CSV export.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://comfy-swan-4aa8be.netlify.app",
    repo: "https://github.com/Ayan-Dini1/Job-tracker-app",
  },
  // Add Weather when it’s live
];

/* ===== Skills row (uses .skills / .skill) ===== */
const skills = [
  "React",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Responsive UI",
  "Git & GitHub",
];

export default function App() {
  return (
    <main className="wrapper">
      {/* Header */}
      <header className="header">
        <h1 className="title">
          Hi, I’m Ayan Dini <span role="img" aria-label="wave">👋</span>
        </h1>
        <p className="subtitle">Frontend Developer · React · JavaScript</p>

        <div className="inline-links" style={{ marginTop: 10 }}>
          <a href="mailto:diniayaaan@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/ayan-dini-6658919a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ayan-Dini1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* About */}
      <section className="card">
        <h2>About</h2>
        <p>
          I build clean, responsive interfaces with{" "}
          <strong>React, JavaScript, HTML, and CSS</strong>. I care about
          clarity, accessibility, and performance.
        </p>
      </section>

      {/* Projects (uses your .grid, .card, .tags, .actions styles) */}
      <section className="card">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <div className="actions">
                <a href={p.demo} target="_blank" rel="noreferrer">Live</a>
                <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <span key={s} className="skill">{s}</span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Ayan Dini</span>
      </footer>
    </main>
  );
}
