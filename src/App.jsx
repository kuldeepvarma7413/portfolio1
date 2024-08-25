import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter } from "react-simple-typewriter";
import "./App.css";
import catVector from "./assets/cat_vector.webp";
import kuldeepImg from "./assets/kuldeep.webp";
import background from "./assets/background.webp";
import stone1 from "./assets/stone1.webp";
import stone2 from "./assets/stone2.webp";
import stone3 from "./assets/stone3.webp";
import medicWorld from "./assets/medic_world.webp";
import studysync from "./assets/studysync.webp";
import projectManager from "./assets/project_manager.webp";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import StudySyncAndroid from "./assets/studysync_android.webp";
import BMICalculator from "./assets/bmi_calculator.webp";
import HireMe from "./assets/hire_me-min.webp";
import fullStack from "./assets/full_stack.webp";
import android from "./assets/android.webp";
import api from "./assets/api.webp";
import logo from "./assets/logo.webp";
import AuthSystem from "./assets/auth_system.webp";
import { IoMailOpen } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function App() {
  useEffect(() => {
    const header = document.querySelector("header");
    const links = header.querySelectorAll("a");
    const logo = header.querySelector(".logo");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("selected"));
        link.classList.add("selected");
      });
    });

    logo.addEventListener("mouseover", () => {
      logo.querySelector(
        ".logo-text"
      ).innerHTML = `<span>made by</span><p>Kuldeep</p>`;
    });

    logo.addEventListener("mouseout", () => {
      logo.querySelector(".logo-text").innerHTML = "PORTFOLIO";
    });
  });

  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [SpecializationText] = useTypewriter({
    words: ["Full Stack Developer", "Android Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      {/* header */}
      <header data-aos="fade-up">
        <Link activeClass="active" smooth spy to="home">
          Home
        </Link>
        <Link activeClass="active" smooth spy to="project">
          Project
        </Link>
        <Link activeClass="active" smooth spy to="service">
          Service
        </Link>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "45px" }}
            loading="lazy"
            decoding="async"
          />
          <p className="logo-text">PORTFOLIO</p>
        </div>
        <a activeClass="active" href="https://docs.google.com/document/d/1UsMM3rHAYsDpERMVqKndmOm4nqhIT5pP/edit?usp=sharing&ouid=106745857030630442931&rtpof=true&sd=true" download >
          Resume
        </a>
        <Link activeClass="active" smooth spy to="education">
          Education
        </Link>
        <Link activeClass="active" smooth spy to="contact">
          Contact
        </Link>
      </header>

      {/* content section */}
      {/* intro */}
      <div className="intro" data-aos="fade-up">
        <section id="home" className="details">
          <p className="greet">
            Hello!
            <img
              src={catVector}
              alt="cat-vector"
              loading="lazy"
              decoding="async"
            />
          </p>
          <h1 className="data">
            I'm <span>Kuldeep</span>,<br />
            {SpecializationText}
            <img
              src={catVector}
              alt="cat-vector"
              loading="lazy"
              decoding="async"
            />
          </h1>
        </section>
        <section className="intro-about" data-aos="fade-up">
          <p className="quote">
            "A Full Stack Developer with a passion for creating innovative
            solutions"
          </p>
          <div className="experience" data-aos="fade-up">
            {/* stars */}
            <div className="stars">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
            <h2>2 Years</h2>
            <p>Experience</p>
          </div>
        </section>
        <section className="image-area">
          {/* image */}
          <img
            className="photo"
            src={kuldeepImg}
            alt=""
            loading="lazy"
            decoding="async"
            data-aos="fade-up"
          />
          {/* portfolio and contact */}
          <div className="CV-links">
            <a href="https://docs.google.com/document/d/1UsMM3rHAYsDpERMVqKndmOm4nqhIT5pP/edit?usp=sharing&ouid=106745857030630442931&rtpof=true&sd=true" className={"selected"} download>
              Portfolio
            </a>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </div>
        </section>
      </div>
      {/* services section */}
      <div className="service" id="service" data-aos="fade-up">
        <img
          src={background}
          className="background"
          alt="background-image"
          loading="lazy"
          decoding="async"
        />
        <img
          src={stone1}
          alt="stone1"
          className="stone1 stone"
          loading="lazy"
          decoding="async"
        />
        <img
          src={stone2}
          alt="stone2"
          className="stone2 stone"
          loading="lazy"
          decoding="async"
        />
        <img
          src={stone3}
          alt="stone3"
          className="stone3 stone"
          loading="lazy"
          decoding="async"
        />
        <div className="top-content" data-aos="fade-up">
          <h2>
            My <span className="d-orange">Sevices</span>
          </h2>
          <p>
            Offering full-stack web and mobile development services,
            specializing in user-friendly interfaces and efficient data
            management solutions.
          </p>
        </div>
        <div className="services">
          <ServiceCard title="Full Stack Development" image={fullStack} />
          <ServiceCard title="Mobile App Development" image={android} />
          <ServiceCard title="API development" image={api} />
        </div>
      </div>
      {/* work experience */}
      <div className="experience" id="resume" data-aos="fade-up">
        <section className="content">
          <h2>
            My <span className="d-orange">Work Experience</span>
          </h2>
          <div className="exp-details">
            <div className="companies" data-aos="fade-up">
              <div className="company school">
                <h2>EVE Health Centers, Gurgaon</h2>
                <p>Jun 2023- August 2023</p>
              </div>
              <div className="dots">
                <span className="dot-outer">
                  <p className="dot red"></p>
                </span>
              </div>
              <div className="role stream">
                <h2>Front-end Intern</h2>
                <p>
                  Designed user-friendly interfaces, resolved bugs, and
                  optimized web pages using HTML, CSS, JavaScript, and jQuery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* education experience */}
      {/* why hire */}
      <div className="why-hire" data-aos="fade-up">
        <div className="hire-left">
          <div className="back-cont">
            <img src={HireMe} alt="" loading="lazy" decoding="async" data-aos="fade-up" />
          </div>
        </div>
        <div className="hire-right">
          <h2 data-aos="fade-up">
            Why <span className="d-orange">Hire me</span>?
          </h2>
          <ul>
            <li data-aos="fade-up">
              Over 10+ successful projects completed in web and mobile
              development.
            </li>
            <li data-aos="fade-up">
              Proficient in full-stack development, specializing in React,
              Node.js & Android.
            </li>
            <li data-aos="fade-up">
              Strong problem-solving skills with a proven track record in
              practice platforms.
            </li>
            <li data-aos="fade-up">Excellent collaboration and communication abilities.</li>
            <li data-aos="fade-up">
              Dedicated to delivering high-quality, user-centric solutions.
            </li>
          </ul>
          <a className="hire-me-btn" href="mailto:kuldeepvarma7413@gmail.com" data-aos="fade-up">
            Hire me
          </a>
        </div>
      </div>
      {/* projects */}
      <div className="projects" id="project" data-aos="fade-up">
        <div className="top">
          <h2>
            Let's have a look at
            <br />
            my <span className="d-orange">Projects</span>
          </h2>
          <button>See All Below</button>
        </div>
        <div className="all-project">
          <ProjectCard
            title="Authentication System"
            description="Developed an authentication system with local and Google OAuth, email verification, and JWT-based security. Includes user status management for secure interactions."
            image={AuthSystem}
            githubLink="https://github.com/kuldeepvarma7413/Authentication-using-MERN"
          />
          <ProjectCard
            title="StudySync"
            description="StudySync is your ultimate academic companion, designed to simplify note-taking and collaboration. With its powerful search capabilities, compiler-driven functionalities, and seamless integration with MongoDB and Cloudinary, it revolutionizes how students manage and share study materials."
            image={studysync}
            link="https://www.studysync.co.in"
            githubLink="https://github.com/kuldeepvarma7413/StudySync-MERN"
          />
          <ProjectCard
            title="Project Manager"
            description="A Project Management Application enabling teams to plan, track, and collaborate on tasks. Features include task assignments, progress monitoring, and deadline management, enhancing efficiency and project delivery."
            image={projectManager}
            githubLink={"https://github.com/kuldeepvarma7413/project_manager"}
          />
          <ProjectCard
            title="Medic World"
            description="The Pharmacy Management is a project developed to enhance the efficiency, accuracy, and security of pharmacy operations. It features user roles for administrators and chemists, facilitating tasks like adding and managing medicines, generating bills, and maintaining user profiles using Java and Swing components."
            image={medicWorld}
            githubLink="https://github.com/kuldeepvarma7413/Medic-World-Application-JAVA"
          />
          <ProjectCard
            title="BMI Calculator"
            description="Developed a user-friendly BMI calculator to help users easily determine their Body Mass Index based on weight and height inputs."
            image={BMICalculator}
            githubLink="https://github.com/kuldeepvarma7413/BMI-Calculator"
          />
          <ProjectCard
            title="StudySync Android App"
            description="Developed StudySync, an Android app for enhanced notes management, featuring real-time collaboration, note sharing, and user-friendly interface to streamline study sessions."
            image={StudySyncAndroid}
            githubLink="https://github.com/kuldeepvarma7413/StudySync_Android"
          />
        </div>
      </div>
      {/* moving label */}
      <div className="moving-label" data-aos="fade-up">
        <label className="label1">
          Android Apps <SiGooglegemini className="gemini" /> Web Apps{" "}
          <SiGooglegemini className="gemini" /> UI/UX{" "}
          <SiGooglegemini className="gemini" /> APIs
        </label>
        <label className="label2">
          Android Apps <SiGooglegemini className="gemini" /> Web Apps{" "}
          <SiGooglegemini className="gemini" /> UI/UX{" "}
          <SiGooglegemini className="gemini" /> APIs
        </label>
      </div>
      {/* work experience */}
      <div className="experience" id="education" data-aos="fade-up">
        <section className="content">
          <h2>
            My <span className="d-orange">Education</span>
          </h2>
          <div className="exp-details">
            <div className="companies" data-aos="fade-up">
              <div className="company school">
                <h2>Lovely Professional University</h2>
                <p>Jalandhar, Punjab | Aug 2021 - May 2025</p>
              </div>
              <div className="dots">
                <span className="dot-outer">
                  <p className="dot red"></p>
                </span>
              </div>
              <div className="role stream">
                <h2>B.Tech. CSE</h2>
                <p>Specialization: Full Stack, Android | CGPA: 8.12</p>
              </div>
            </div>
            <div className="companies" data-aos="fade-up">
              <div className="company school">
                <h2>G.B.S. School, Jaswantpura</h2>
                <p>Churu, Rajasthan | Jul 2019 - May 2020</p>
              </div>
              <div className="dots">
                <span className="dot-outer">
                  <p className="dot d-blue"></p>
                </span>
              </div>
              <div className="role stream">
                <h2>12th (Science)</h2>
                <p>Specialization: Physics, Chemistry, Maths | Result: 71%</p>
              </div>
            </div>
            <div className="companies" data-aos="fade-up">
              <div className="company school">
                <h2>G.B.S. School, Jaswantpura</h2>
                <p>Churu, Rajasthan | Jul 2017 - May 2018</p>
              </div>
              <div className="dots">
                <span className="dot-outer">
                  <p className="dot red"></p>
                </span>
              </div>
              <div className="role stream">
                <h2>10th (Science)</h2>
                <p>Result: 80.67%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* have an awesome idea */}
      <div className="connect" data-aos="fade-up">
        <h2>
          Have an Awesome Project Idea?{" "}
          <span className="d-orange">Let's Discuss</span>
        </h2>
        <form
          action="https://public.herotofu.com/v1/ca1a0aa0-47e2-11ef-9c40-81ddfd46a512"
          method="post"
          acceptCharset="UTF-8"
          className="connect-input"
          data-aos="fade-up"
        >
          <IoMailOpen className="mail-icon" />
          <input
            name="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            name="Name"
            id="name"
            type="text"
            value={"portfolio"}
            style={{ width: "0px", padding: "0px" }}
            required
          />
          <button type="submit">Send</button>

          <div className="extra">
            <input type="submit" value="Download CTA" />
            <div aria-hidden="true">
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
      </div>
      {/* footer */}
      <footer data-aos="fade-up">
        <div className="top">
          <h2>Let's Connect there</h2>
          <a href="https://www.linkedin.com/in/kul-deep-varma-4150bb225/">
            Connect
          </a>
        </div>
        <p className="line"></p>
        {/* details */}
        <div className="details"  data-aos="fade-up">
          <div className="social">
            <p>
              Passionate web developer skilled in C++, Python, JavaScript,
              React, Node.js, and Flutter. Created StudySync, Medic World, and
              Blood Bank Application. Solved 400+ LeetCode challenges. Pursuing
              B.Tech in Computer Science at Lovely Professional University.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/kul-deep-varma-4150bb225/">
                <BsLinkedin className="icon" />
              </a>
              <a href="https://github.com/kuldeepvarma7413">
                <FaSquareGithub className="icon" />
              </a>
              <a href="https://www.instagram.com/kuldeepvarma7413">
                <RiInstagramFill className="icon" />
              </a>
              <a href="https://leetcode.com/u/kuldeepvarma7413/">
                <SiLeetcode className="icon" />
              </a>
            </div>
          </div>
          <div className="navs">
            <h2>Navigation</h2>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
            <Link activeClass="active" smooth spy to="service">
              Service
            </Link>
            <Link activeClass="active" smooth spy to="resume">
              Resume
            </Link>
            <Link activeClass="active" smooth spy to="project">
              Project
            </Link>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <a href="tel:+917413912366">+91 7413912366</a>
            <a href="mailto:kuldeepvarma7413@gmail.com">
              kuldeepvarma7413@gmail.com
            </a>
            <a href="https://kuldeepvarma.netlify.app">
              kuldeepvarma.netlify.app
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
