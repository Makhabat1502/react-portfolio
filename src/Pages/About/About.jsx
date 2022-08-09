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
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  const works = [
    {
      title: "CloudBudget",
      imgUrl: Porfolio1,
    },
    {
      title: "Loan Calculator",
      imgUrl: Porfolio2,
    },
    {
      title: "GitHub API project",
      imgUrl: Porfolio3,
    },
  ];

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
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 1,
            }}
          >
            My Skills
          </motion.h3>
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
            {works.map((work, idx) => (
              <motion.li
                variants={workVariants}
                initial={"hidden"}
                animate={"visible"}
                key={idx}
                custom={idx}
              >
                <img src={work.imgUrl} alt="" />
                <h4>{work.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
