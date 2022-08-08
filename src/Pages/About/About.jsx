import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Porfolio1 from "../../images/portfolio-1.png";
import Porfolio2 from "../../images/portfolio-2.jpg";
import Porfolio3 from "../../images/portfolio-3.PNG";

import "./about.scss";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
              type: "spring",
            }}
          >
            Hello, I'm Makhabat
          </motion.h1>
          <p>Frontend React Developer</p>
        </div>

        <div className="about__skills">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
            </li>
            <li>
              <FaCss3 />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <FaSass />
              Sass
            </li>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
            </li>
            <li>
              <FaGitAlt />
              Git
            </li>
            <li>
              <FaGithub />
              GitHub
            </li>
            <li>
              <FaFigma />
              Figma
            </li>
          </ul>
        </div>

        <div className="about__portfolio">
          <h3>Latest works</h3>
          <ul>
            <li>
              <img src={Porfolio1} alt="" />
              <h4>CloudBudget</h4>
            </li>
            <li>
              <img src={Porfolio2} alt="" />
              <h4>Loan Calculator</h4>
            </li>
            <li>
              <img src={Porfolio3} alt="" />
              <h4>GitHub API project</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
