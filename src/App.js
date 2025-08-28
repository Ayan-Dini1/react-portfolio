import React from "react";
import "./App.css";

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
  // Add more projects here when ready
];

export default function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="title">Hi, I’m Ayan Dini 👋</h1>
        <p className="subtitle">Frontend Developer • React • JavaScript</p>
        <div className="inline-links" style={{ marginTop: 10 }}>
          <a href="mailto:diniayaaaaan@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/ayan-dini-6658919a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/Ayan-Dini1" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="section">
        <h2>About</h2>
        <p style={{ color: "var(--muted)", marginTop: 6 }}>
          I build clean, responsive interfaces with <strong>React</strong>,
          <strong> JavaScript</strong>, <strong>HTML</strong>, and{" "}
          <strong>CSS</strong>. I care about clarity, accessibility, and
          performance.
        </p>
      </section>

      <div className="hr" />

      <section className="section">
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
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="hr" />

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          {[
            "React",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Responsive UI",
            "Git & GitHub",
          ].map((s) => (
            <span className="skill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ayan Dini • Built with React</p>
        <p>
          Contact:{" "}
          <a href="mailto:diniayaaaaan@gmail.com">diniayaaaaan@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
