import React, { useState, useEffect } from "react";
import "./App.css";

function Home() {
  const roles = ["Web Developer", "MERN Stack Enthusiast"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Typing Effect (FIXED POSITION)
  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }

      // typing complete
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // deleting complete
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  // ✅ Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after clicking
  };

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
  <span className="logo-icon">KR</span> Khushi Rana
</div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <button className="nav-button" onClick={() => scrollToSection("home")}>Home</button>
          <button className="nav-button" onClick={() => scrollToSection("about")}>About</button>
          <button className="nav-button" onClick={() => scrollToSection("skills")}>Skills</button>
          <button className="nav-button" onClick={() => scrollToSection("projects")}>Projects</button>
          <button className="nav-button" onClick={() => scrollToSection("contact")}>Contact</button>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="section home">
        <div className="home-left">
        <h1>Hi, I'm Khushi Rana 👋</h1>

        <h2>
          I am <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="home-content">
I am passionate about web development, especially MERN stack development.
I love building real-world applications that solve meaningful problems.
I enjoy working with JavaScript and constantly learning new technologies to grow as a developer.
        </p>

<a
  className="nav-button"
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download
>
  <button>Download Resume</button>
</a>
        </div>
        {/* RIGHT IMAGE */}
  <div className="home-right">
    <img src={`${import.meta.env.BASE_URL}khu18.jpg`} alt="profile" />
  </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello, I'm Khushi Rana, a passionate MERN Stack Developer and tech enthusiast. I actively participate in hackathons, including SIH 2025, which have helped me sharpen my problem-solving and teamwork skills.
          </p>
          <p>
            I have hands-on experience building full-stack web applications and projects that focus on practical solutions. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I enjoy turning ideas into functional and scalable products.
          </p>
          <p>
            Driven by curiosity and a love for learning, I aim to contribute to innovative tech solutions and make a meaningful impact in the software development world.
          </p>
        </div>
      </section>
      <section id="skills" className="section skills">
  <h1>My Skills</h1>
  <div className="skills-container">
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}html.png`} alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}css.png`} alt="CSS" />
      <p>CSS</p>
    </div>
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}javascript.png`} alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}react.png`} alt="React" />
      <p>React</p>
    </div>
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}node1.png`} alt="Node.js" />
      <p>Node.js</p>
    </div>
    <div className="skill">
      <img src={`${import.meta.env.BASE_URL}mongodb.png`} alt="MongoDB" />
      <p>MongoDB</p>
    </div>
     <div className="skill">
      <img src={`${import.meta.env.BASE_URL}sql.png`} alt="SQL" />
      <p>SQL</p>
    </div>
  </div>
</section>
<section id="projects" className="projects">
  <h1>My Projects</h1>
  <div className="projects-grid">
    <div className="pro">
      <h1>AgriDirect</h1>
      <p>AgriDirect V2 is a modern agricultural supply chain platform that connects farmers, distributors, retailers, and consumers in a transparent ecosystem. It uses AI‑powered features, blockchain verification, and QR codes to ensure product authenticity and traceability. By reducing intermediaries, it helps farmers get fair prices while giving consumers confidence in the products they buy.</p>
    {/* GitHub Button :- link :- https://github.com/Khushiben/AgriDirect_V2.git target="_blank" */}
    
  <a
    href="/"
    rel="noopener noreferrer"
  >
    <button className="nav-button">In Progress</button>
  </a>

    </div>
    <div className="pro">
      <h1>Study Buddy - A smart Study Companion</h1>
      <p>Study Buddy is a smart study companion that helps students organize, track, and improve their study habits. It integrates study timers, flashcards, note sharing, deadline reminders, collaborative study circles, and aptitude modules into a single student‑friendly platform to boost focus, consistency, and academic performance.</p>
    {/* GitHub Button */}
  <a
    href="https://github.com/Khushiben/Study-Buddy-A-Smart-Study-Companion.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="nav-button">View on GitHub</button>
  </a>

    </div>
    
    <div className="pro">
      <h1>CampusChain</h1>
      <p>CampusChain Marketplace is a decentralized college marketplace Web3 dApp that enables students to securely list, buy, and sell items within their campus community. By leveraging blockchain technology, the platform ensures transparent ownership, crypto‑secured peer‑to‑peer transactions, and trustless interactions without intermediaries. This student‑focused marketplace brings modern web3 commerce to campus life with a secure, transparent, and decentralized buying and selling experience.</p>
    {/* GitHub Button  link :- https://github.com/Khushiben/CampusChain_Marketplace.git target="_blank"*/}
  <a
    href="/"
    rel="noopener noreferrer"
  >
    <button className="nav-button">In Progress</button>
  </a>
    </div>
  </div>
</section>
<section id="contact" className="contact">
  <h1>Contact Me</h1>
  <p>Feel free to reach out to me for any inquiries, collaborations, or just to say hi! You can contact me through the following channels:</p>
  <div className="contact-links">
    <a
      href="https://www.linkedin.com/in/khushiben-rana-7166082bb"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-button"
    >
      <span className="contact-icon" aria-hidden="true">🔗</span>
      <span>LinkedIn</span>
    </a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khushibenrana@gmail.com" target="_blank" className="nav-button">
      <span className="contact-icon" aria-hidden="true">✉️</span>
      <span>Email</span>
    </a>
    <a
      href="https://wa.me/9106453981"
      target="_blank"
      rel="noopener noreferrer"
      className="nav-button"
    >
      <span className="contact-icon" aria-hidden="true">💬</span>
      <span>WhatsApp</span>
    </a>
  </div>
</section>    </>
  );
}

export default Home;