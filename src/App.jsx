import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./App.css";
import catVector from "./assets/cat_vector.png";
import kuldeepImg from "./assets/kuldeep.png";
import background from "./assets/background.jpg";
import stone1 from "./assets/stone1.png";
import stone2 from "./assets/stone2.png";
import stone3 from "./assets/stone3.png";
import medicWorld from "./assets/medic_world.png";
import studysync from "./assets/studysync.png";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
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

  return (
    <>
      {/* header */}
      <header>
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
          <span>Logo</span>
          <p className="logo-text">PORTFOLIO</p>
        </div>
        <Link activeClass="active" smooth spy to="resume">
          Resume
        </Link>
        <Link activeClass="active" smooth spy to="education">
          Education
        </Link>
        <Link activeClass="active" smooth spy to="contact">
          Contact
        </Link>
      </header>

      {/* content section */}
      {/* intro */}
      <div className="intro">
        <section id="home" className="details">
          <p className="greet">
            Hello!
            <img src={catVector} alt="cat-vector" />
          </p>
          <h1 className="data">
            I'm <span>Kuldeep</span>,<br />
            Full Stack Developer
            <img src={catVector} alt="cat-vector" />
          </h1>
        </section>
        <section className="intro-about">
          <p className="quote">
            "A Full Stack Developer with a passion for creating innovative
            solutions"
          </p>
          <div className="experience">
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
          <img className="photo" src={kuldeepImg} alt="" />
          {/* portfolio and hire me */}
          <div className="CV-links">
            <NavLink to={"#"} className={"selected"}>
              Portfolio
            </NavLink>
            <NavLink to={"#"}>Contact</NavLink>
          </div>
        </section>
      </div>
      {/* services section */}
      <div className="service" id="service">
        <img src={background} className="background" alt="background-image" />
        <img src={stone1} alt="stone1" className="stone1 stone" />
        <img src={stone2} alt="stone2" className="stone2 stone" />
        <img src={stone3} alt="stone3" className="stone3 stone" />
        <div className="top-content">
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
          <ServiceCard title="Full Stack Development" image={studysync} />
          <ServiceCard title="Mobile App Development" image={background} />
          <ServiceCard title="API development" image={background} />
        </div>
      </div>
      {/* work experience */}
      <div className="experience" id="resume">
        <section className="content">
          <h2>
            My <span className="d-orange">Work Experience</span>
          </h2>
          <div className="exp-details">
            <div className="companies">
              <div className="company">
                <h2>EVE Health Centers, Gurgaon</h2>
                <p>Jun 2023- August 2023</p>
              </div>
            </div>
            <div className="dotes">
              <span className="dot red-dot"></span>
            </div>
            <div className="roles">
              <div className="role">
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
      <div className="why-hire">
        <div className="hire-left">
          <div className="back-cont">
            <img src="" alt="" />
          </div>
        </div>
        <div className="hire-right">
          <h2>
            Why <span className="d-orange">Hire me</span>?
          </h2>
          <ul>
            <li>
              Over 10 successful projects completed in web and mobile
              development.
            </li>
            <li>
              Proficient in full-stack development, specializing in React,
              Node.js, and Flutter.
            </li>
            <li>
              Strong problem-solving skills with a proven track record in
              hackathons.
            </li>
            <li>Excellent collaboration and communication abilities.</li>
            <li>
              Dedicated to delivering high-quality, user-centric solutions.
            </li>
          </ul>
          <a className="hire-me-btn" href="mailto:kuldeepvarma7413@gmail.com">
            Hire me
          </a>
        </div>
      </div>
      {/* projects */}
      <div className="projects" id="project">
        <div className="top">
          <h2>
            Let's have a look at
            <br />
            my <span className="d-orange">Projects</span>
          </h2>
          <button>See All</button>
        </div>
        <div className="all-project">
          <ProjectCard
            title="StudySync"
            description="StudySync is your ultimate academic companion, designed to simplify note-taking and collaboration. With its powerful search capabilities, compiler-driven functionalities, and seamless integration with MongoDB and Cloudinary, it revolutionizes how students manage and share study materials."
            image={studysync}
            link="https://www.studysync.co.in"
            githubLink="https://github.com/kuldeepvarma7413/StudySync-MERN"
          />
          <ProjectCard
            title="Medic World"
            description="The Pharmacy Management is a project developed to enhance the efficiency, accuracy, and security of pharmacy operations. It features user roles for administrators and chemists, facilitating tasks like adding and managing medicines, generating bills, and maintaining user profiles using Java and Swing components."
            image={medicWorld}
            githubLink="https://github.com/kuldeepvarma7413/Medic-World-Application-JAVA"
          />
          <ProjectCard
            title="Medic World"
            description="The Pharmacy Management is a project developed to enhance the efficiency, accuracy, and security of pharmacy operations. It features user roles for administrators and chemists, facilitating tasks like adding and managing medicines, generating bills, and maintaining user profiles using Java and Swing components."
            image={medicWorld}
          />
          <ProjectCard
            title="BMI Calculator"
            description="Developed a user-friendly BMI calculator to help users easily determine their Body Mass Index based on weight and height inputs."
            image={studysync}
            githubLink="https://github.com/kuldeepvarma7413/BMI-Calculator"
          />
        </div>
      </div>
      {/* moving label */}
      <div className="moving-label">
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
      <div className="experience" id="education">
        <section className="content">
          <h2>
            My <span className="d-orange">Education</span>
          </h2>
          <div className="exp-details">
            <div className="companies">
              <div className="company school">
                <h2>Lovely Professional University</h2>
                <p>Jalandhar, Punjab | Aug 2021 - May 2025</p>
              </div>
              <div className="company school">
                <h2>G.B.S. School, Jaswantpura</h2>
                <p>Churu, Rajasthan | Jul 2019 - May 2020</p>
              </div>
              <div className="company school">
                <h2>G.B.S. School, Jaswantpura</h2>
                <p>Churu, Rajasthan | Jul 2017 - May 2018</p>
              </div>
            </div>
            <div className="dotes">
              <span className="dot red-dot"></span>
              <span className="dot red-dot"></span>
              <span className="dot red-dot"></span>
            </div>
            <div className="roles">
              <div className="role stream">
                <h2>B.Tech. CSE</h2>
                <p>
                  Specialization: Full Stack, Android | CGPA: 8.12
                </p>
              </div>
              <div className="role stream">
                <h2>12th (Science)</h2>
                <p>
                  Specialization: Physics, Chemistry, Maths | Result: 71%
                </p>
              </div>
              <div className="role stream">
                <h2>10th (Science)</h2>
                <p>
                  Result: 80.67%
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* have an awesome idea */}
      <div className="connect">
        <h2>
          Have an Awesome Project Idea?{" "}
          <span className="d-orange">Let's Discuss</span>
        </h2>
        <div className="connect-input">
          <IoMailOpen className="mail-icon" />
          <input type="email" placeholder="Enter your email" />
          <button>Send</button>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="top">
          <h2>Let's Connect there</h2>
          <button>Connect</button>
        </div>
        <p className="line"></p>
        {/* details */}
        <div className="details">
          <div className="social">
            <p>
              Passionate web developer skilled in C++, Python, JavaScript,
              React, Node.js, and Flutter. Created StudySync, Medic World, and
              Blood Bank Application. Solved 400+ LeetCode challenges. Pursuing
              B.Tech in Computer Science at Lovely Professional University.
            </p>
            <div className="social-links">
              <a href="">
                <BsLinkedin className="icon" />
              </a>
              <a href="">
                <FaSquareGithub className="icon" />
              </a>
              <a href="">
                <RiInstagramFill className="icon" />
              </a>
              <a href="">
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
            <p>+91 7413912366</p>
            <p>kuldeepvarma7413@gmail.com</p>
            <p>kuldeepvarma7413.netlify.app</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
