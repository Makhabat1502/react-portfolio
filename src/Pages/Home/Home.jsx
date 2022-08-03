import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { init } from "ityped";
import Photo from "../../images/my-photo.jpg";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Frontend React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Makhabat Berdibekova</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            I am a young developer who is looking for new projects and new
            people to gain new skills. My passion is Frontend development. I
            specialize in JavaScript ES6 and React.js. Familiar with Frontend
            tools and libraries such as React, UI/UX, Bootstrap, JQuery, Figma
            and etc. My main goals are acquiring new skills and professional
            development. I am hard-working person and quick-learner. Every
            created project is my motivation. I am not scare of new tasks and
            always finish anything I start.
          </p>
          <ul className="home__links">
            <li>
              <a
                href="https://www.linkedin.com/in/makhabat-berdibekova-179225239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Makhabat1502"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="mailto:makhabat.berdibekova.kk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Hire me
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="myPhoto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
