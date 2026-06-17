import React, { useState, useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"

function Home() {
  const roles = ["Web Developer", "MERN Stack Enthusiast","Tech Enthusiast"];

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
  useEffect(()=> {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
},[]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
  <span className="logo-icon">KR</span> Khushiben Rana
</div>

       <div className="menu-toggle" onClick={toggleMenu}>
  {menuOpen ? (
    <span className="close-icon">&times;</span>
  ) : (
    <>
      <span></span>
      <span></span>
      <span></span>
    </>
  )}
</div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <button
  className="nav-button"
  onClick={() => {
    scrollToSection("home");
    setMenuOpen(false);
  }}
>
  Home
</button>
          <button className="nav-button" onClick={() => scrollToSection("about")}>About</button>
          <button className="nav-button" onClick={() => scrollToSection("education")}>Education</button>
          <button className="nav-button" onClick={() => scrollToSection("skills")}>Skills</button>
          <button className="nav-button" onClick={() => scrollToSection("projects")}>Projects</button>
          <button className="nav-button" onClick={() => scrollToSection("certifications")}>Certifications</button>
          <button className="nav-button" onClick={() => scrollToSection("contact")}>Contact</button>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="section home" data-aos="fade-right">
        <div className="home-left">
        <h1>Hi, I'm Khushiben Rana 👋</h1>

        <h2>
          I'm an aspiring <span className="typing">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="home-content">
I am a 3rd year Computer Engineering student passionate about web development, with a strong focus on MERN stack development.
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
    <img src={`${import.meta.env.BASE_URL}k181818.jpeg`} alt="profile" />
  </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about" data-aos="fade-right">
        <div className="about-content">
          <h1 style={{ borderBottom: "3px solid #00bcd4" }}>About Me</h1>
          <p>
            I am Khushiben Rana, a 3rd year Computer Engineering student and aspiring MERN Stack Developer with a strong interest in web development. I actively participate in hackathons, including SIH 2025, which have enhanced my problem-solving and teamwork abilities.
          </p>
          <p>
            I have hands-on experience building full-stack web applications and projects that focus on practical solutions. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I enjoy turning ideas into functional and scalable products.
          </p>
          <p>
            Driven by curiosity and a love for learning, I aim to contribute to innovative tech solutions and make a meaningful impact in the software development world.
          </p>
        </div>
      </section>
      {/* EDUCATION SECTION */}
<section id="education" className="section education" data-aos="fade-right">
  <h1>Education</h1>

  <div className="edu-card">
    <h2>B.Tech in Computer Engineering (2023-2027)</h2>
    <p>Madhuben and Bhanubhai Patel Institute of Technology, New V.V. Nagar</p>

    <div className="edu-details">
      <h3>10th Percentage: 94.00%</h3>
      <h3>12th Percentage: 76.76%</h3>
      <h3>Last Semester SGPA: 9.43</h3>
      <h3>Current CGPA: 9.49</h3>
    </div>

    <button className="nav-button"
      onClick={() =>
        window.open(`${import.meta.env.BASE_URL}result.png`)
      }
    >
      View Latest Semester Result
    </button>
  </div>
</section>
      <section id="skills" className="section skills" data-aos="fade-right">
  <h1>Technical Skills</h1>
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
  <img src={`${import.meta.env.BASE_URL}express.png`} alt="Express.js" />
  <p>Express.js</p>
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
<section id="projects" className="section projects" data-aos="fade-right">
  <h1>My Projects</h1>
  <div className="projects-grid">
    <div className="pro">
      <h2>AgriDirect</h2>
      <p>AgriDirect is a modern agricultural supply chain platform that connects farmers, distributors, retailers, and consumers in a transparent ecosystem. It uses AI‑powered features, blockchain verification, and QR codes to ensure product authenticity and traceability. By reducing intermediaries, it helps farmers get fair prices while giving consumers confidence in the products they buy.</p>
    {/* GitHub Button :- link :- https://github.com/Khushiben/AgriDirect_V2.git target="_blank" */}
    
  
    <button className="nav-button">In Progress</button>
  

    </div>
    <div className="pro">
      <h2>Study Buddy - A smart Study Companion</h2>
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
      <h2>CampusChain</h2>
      <p>CampusChain Marketplace is a decentralized college marketplace Web3 dApp that enables students to securely list, buy, and sell items within their campus community. By leveraging blockchain technology, the platform ensures transparent ownership, crypto‑secured peer‑to‑peer transactions, and trustless interactions without intermediaries. This student‑focused marketplace brings modern web3 commerce to campus life with a secure, transparent, and decentralized buying and selling experience.</p>
    {/* GitHub Button  link :- https://github.com/Khushiben/CampusChain_Marketplace.git target="_blank"*/}
  
    <button className="nav-button">In Progress</button>
  
    </div>
   <div className="pro">
  <h2>SeeknCart – Your Smart Discount Finder</h2>

  <p>
    SeeknCart is a smart shopping assistant that helps users find the best product deals by comparing prices from different e-commerce platforms. It offers an intuitive interface for product discovery, price comparison, and detailed product insights, enabling shoppers to make informed purchasing decisions while saving both time and money.
  </p>

  {/* GitHub Button */}
  <a
    href="https://github.com/Khushiben/SeeknCart_website.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="nav-button">View on GitHub</button>
  </a>
</div> 
  </div>
</section>
{/* CERTIFICATIONS SECTION */}
<section id="certifications" className="section certifications" data-aos="fade-right">
  <h1>My Certifications</h1>

  <div className="cert-container">

    {/* SIH */}
    <div className="cert-card">
      <h2>Smart India Hackathon (SIH) 2025</h2>
      <p>
Participated in Smart India Hackathon (SIH) 2025 and attended the Grand Finale at Sri Sri University, where I collaborated with a team to develop a real-world solution. Worked on the project "AgriDirect" (details in Projects section).
</p>
      <button className="nav-button" onClick={() => window.open(`${import.meta.env.BASE_URL}sih18.jpeg`)}>
        View Certificate
      </button>
    </div>

    {/* HACKX */}
    <div className="cert-card">
      <h2>HackX 2025</h2>
      <p>
Participated in HackX 2025 at Nirma University, Ahmedabad, where I collaborated with a team to develop innovative solutions. Contributed to the project "AgriDirect" (see Projects section).
</p>
      <button className="nav-button" onClick={() => window.open(`${import.meta.env.BASE_URL}hackx18.jpeg`)}>
        View Certificate
      </button>
    </div>

    {/* PARANOX */}
    <div className="cert-card">
      <h2>Paranox 2.0</h2>
      <p>
Selected among the top 200 teams for Paranox 2.0 hackathon, demonstrating strong problem-solving and development skills.
</p>
      <button className="nav-button" onClick={() => window.open(`${import.meta.env.BASE_URL}paranoc18.jpeg`)}>
        View Certificate
      </button>
    </div>
    {/* CVMU Hackathon */}
    <div className="cert-card">
      <h2>CVMU Hackathon 2025 & 2026</h2>
      <p>
Participated in CVMU Hackathon 2025 with the project "SeeknCart – Your Smart Discount Finder" and in CVMU Hackathon 2026 with "AgriDirect", enhancing problem-solving, teamwork, and development skills.</p>
      <button className="nav-button" onClick={() => window.open(`${import.meta.env.BASE_URL}cvmu.jpeg`)}>
        View Certificate
      </button>
    </div>

  </div>
</section>
<section id="contact" className="section contact" data-aos="fade-right">
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
    <a
  href="mailto:khushibenrana@gmail.com?subject=Regarding%20Your%20Portfolio&body=Hello%20Khushi%2C"
  className="nav-button"
>
  <span className="contact-icon">✉️</span>
  <span>Email</span>
</a>
    <a
      href="https://wa.me/919106453981?text=Hello%20Khushi%2C%20I%20saw%20your%20portfolio"
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