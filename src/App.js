import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>👋 Hi, I’m Ayan Dini</h1>
        <p>Frontend Developer | Building responsive, modern web apps</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate frontend developer skilled in <strong>React, JavaScript, HTML, CSS</strong>.
          I enjoy creating user-friendly and visually appealing web applications.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://ayan-dini1.github.io/portfolio" target="_blank" rel="noreferrer">
              🌐 Portfolio (HTML/CSS/JS Version)
            </a>
          </li>
          <li>
            <a href="https://github.com/Ayan-Dini1" target="_blank" rel="noreferrer">
              💻 GitHub Repositories
            </a>
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:diniayaaa@gmail.com">diniayaaa@gmail.com</a></p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/ayan-dini-6658919a" target="_blank" rel="noreferrer">
            linkedin.com/in/ayan-dini-6658919a
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
