import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const skills = [
    {
      title: "HTML",
      description:
        "I use HTML to create the basic structure of web pages.",
      icon: "🌐",
    },
    {
      title: "CSS",
      description:
        "I use CSS to design and style websites.",
      icon: "🎨",
    },
    {
      title: "React",
      description:
        "I am currently learning how to build interactive applications using React.",
      icon: "⚛️",
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* HOME SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY FIRST REACT APP</p>

            <h1>
              Hello, I'm <span>John Mark</span>
            </h1>

            <p className="hero-description">
              I am an Information Technology student who is
              currently learning React and modern web
              development.
            </p>

            <a href="#about" className="main-button">
              Explore My App
            </a>
          </div>

          <ProfileCard
            name="John Mark"
            course="BS Information Technology"
            school="Cordova Public College"
          />
        </section>

        {/* ABOUT SECTION */}
        <section className="about" id="about">
          <p className="section-label">ABOUT ME</p>

          <h2>Learning One Step at a Time</h2>

          <p>
            This is my first React application. I created this
            project to practice using React components, props,
            events, state, and basic web design. My goal is to
            continue improving my programming skills by
            practicing and building more projects.
          </p>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <p className="section-label">MY SKILLS</p>

          <h2>Technologies I'm Learning</h2>

          <div className="skills-container">
            {skills.map((skill) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            ))}
          </div>
        </section>

        {/* INTERACTIVE SECTION */}
        <section className="practice-section">
          <p className="section-label">
            REACT PRACTICE
          </p>

          <h2>My First useState Example</h2>

          <p>
            Click the button below to practice changing state
            in React.
          </p>

          <div className="counter">
            <h3>{count}</h3>

            <button
              onClick={() => setCount(count + 1)}
            >
              Click Me
            </button>

            <button
              className="reset-button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;