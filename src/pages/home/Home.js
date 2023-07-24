import React, { useState, useEffect, useRef } from 'react';
import Facts from '../../Facts';
import Skills from '../../Skills';
import Contact from '../../Contact';
import Footer from '../../layouts/Footer';
const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Web Developer';
  const [border, setBorder] = useState(true);

  const currentIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const typingSpeedRef = useRef(150);
  const intervalIdRef = useRef(null); // Use useRef to store the intervalId

  useEffect(() => {
    const typeText = () => {
      const currentIndex = currentIndexRef.current;
      const isDeleting = isDeletingRef.current;

      const currentText = isDeleting
        ? fullText.substring(0, currentIndex)
        : fullText.substring(0, currentIndex + 1);

      setText(currentText);

      if (!isDeleting && currentIndex === fullText.length) {
        typingSpeedRef.current = 1000;
        isDeletingRef.current = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeletingRef.current = false;
        setBorder(!border);
        typingSpeedRef.current = 150;
      }

      currentIndexRef.current = isDeleting ? currentIndex - 1 : currentIndex + 1;
    };

    intervalIdRef.current = setInterval(typeText, typingSpeedRef.current);

    const repeatLoop = () => {
      setTimeout(() => {
        clearInterval(intervalIdRef.current);
        currentIndexRef.current = 0;
        isDeletingRef.current = false;
        typingSpeedRef.current = 150;
        intervalIdRef.current = setInterval(typeText, typingSpeedRef.current);
      }, 5000);
    };

    repeatLoop();

    return () => {
      clearTimeout(intervalIdRef.current);
      clearInterval(intervalIdRef.current);
    };
  }, [border]);

  return (
    <div className='sec-1' id='home'>
    <div className='first-par'>
      <h1 className='name'>Bensassi Nour Ikram</h1>
      <div className='texts' style={{ textAlign: 'center' }}>
        <p className='dev'>
          {border && (
            <span style={{ borderBottom: '7px solid blue' }}>
              {text}
            </span>
          )}
        </p>
      </div>
      </div>

      {/* /////////////SECOND/////////// */}
<div className='par mt-5' id="about">
      <div className="about-container ">
      <div className="about-header">
        <h2 className="about-heading">About Me 🌟</h2>
      </div>
      <div className="about-content">
        <div className="section">
          <p className="about-description">
            Hello, I'm Ikram, a passionate and creative web developer based in Casablanca. With a strong foundation in HTML, CSS, and JavaScript, I'm driven by my love for coding and problem-solving to create efficient and user-friendly web applications that deliver an exceptional user experience.
          </p>
        </div>
        <div className="section">
          <p className="about-description">
            My journey into the world of web development began several years ago when I built my first website as a hobby. Since then, I have been continuously learning and honing my skills in various technologies, including React, Node.js, Express.js, and MongoDB. Each project I work on presents an opportunity for me to push my boundaries and explore new possibilities in the digital realm.
          </p>
        </div>
        <div className="section">
          <p className="about-description">
            As a developer, I am committed to writing clean, maintainable code and following best practices. I believe that attention to detail and a focus on the end user are essential in delivering exceptional products. I am constantly seeking growth and always open to new challenges that allow me to expand my skill set and make a positive impact in the web development community.
          </p>
        </div>
        <div className="section">
          <p className="about-description">
            When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes in the kitchen, or diving into a good book. I believe that life is a journey of continuous learning, and I'm excited to see where my passion for web development takes me next.
          </p>
        </div>
        <div className="section">
          <p className="about-contact">
            If you are interested in working together or have any questions, feel free to reach out to me through the contact form on this website or via email at bensassin6@gmail.com
          </p>
        </div>
        <div className="section">
          <h3 className="about-links-heading">Find me on social media:</h3>
          <div className="about-links">
            <a href="https://www.linkedin.com/in/bensassi-nour-ikram-8011ab250/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/iris777vampyheks" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/astraldivine_hh777/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Ikram777nour" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</div>

{/* ////////////////thiird == FACTS///////////// */}
<div id='facts'>
<Facts />
</div>

{/* ////////////////foorth = portfolio///////////// */}
<div className='parent-portfolio' id='portfolio'>
<h2 className="portfolio-heading pt-5">Portfolio 🚀</h2>
            <div className="portfolio-cards">
                <div className="card">
                    <h3>TicTacToe ✨</h3>
                    <p>Unleash your competitive spirit and play with a friend in this timeless game of Xs and Os. Strategize your opponent to claim victory.</p>
                    <a href="https://github.com/iris777vampyheks/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>

                <div className="card">
                    <h3>Lions Restaurant 🍔</h3>
                    <p>Step into a virtual culinary wonderland with our web-based experience. Immerse yourself in a delightful tapestry of flavors of life.</p>
                    <a href="https://github.com/iris777vampyheks/Bensassi_Nour_LionsResto" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>

                <div className="card">
                    <h3>SketchPad 🎨</h3>
                    <p>Unleash creativity with grid-based painting. Vast color palette, easy-to-use interface. Craft beautiful artwork in your browser.</p>
                    <a href="https://github.com/iris777vampyheks/SketchPad" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>

                <div className="card">
                    <h3>Restaurant Chef 🍴</h3>
                    <p>Dive into a delightful web-based culinary experience. From an array of tantalizing dishes to a user-friendly interface.</p>
                    <a href="https://github.com/iris777vampyheks/Chef-restaurant" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>


                <div className="card">
                    <h3>Quantum Simulation🔬</h3>
                    <p>Explore the fascinating world of quantum simulation. This project utilizes advanced quantum computing concepts to simulate quantum systems.</p>
                    <a href="https://github.com/iris777vampyheks/Quantum-simulation#quantum-simulation" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>

                <div className="card">
                    <h3>Task Manager 📝</h3>
                    <p>Stay organized and keep track of your tasks with the Task Manager. This interactive web application allows you to add, edit, and delete tasks.</p>                    <a href="https://github.com/iris777vampyheks/To-do--list" target="_blank" rel="noopener noreferrer">
                        <span role="img" aria-label="GitHub Icon">💻</span>
                        GitHub Link
                    </a>
                </div>
            </div>
            <br /><br />
        </div>

{/* ////////////////fifth == skills///////////// */}

<Skills />

{/* ////////////////SIXTH == services///////////// */}
<div className='parent-services'>
<div className="services-container pt-5" id='services'>
            <div className="services-header">
                <h2 className="services-heading">Our Services 🚀</h2>
            </div>
            <div className="services-content">
                <div className="service">
                    <span>👨‍💻</span>
                    <h3>Web Development</h3>
                    <p>
                        We provide cutting-edge web development solutions that deliver a seamless user experience.
                    </p>
                </div>
                <div className="service">
                    <span>🎨</span>
                    <h3>Graphic Design</h3>
                    <p>
                        Our talented designers create stunning graphics that captivate and engage your audience.
                    </p>
                </div>
                <div className="service">
                    <span>📱</span>
                    <h3>Mobile Apps</h3>
                    <p>
                        Develop mobile applications for iOS and Android platforms to extend your reach.
                    </p>
                </div>
                <div className="service">
                    <span>🔒</span>
                    <h3>Penetration Test</h3>
                    <p>
                        Ensure the security of your applications and networks with thorough penetration testing.
                    </p>
                </div>
                <div className="service">
                    <span>🤖</span>
                    <h3>Automation</h3>
                    <p>
                        Streamline repetitive tasks and improve efficiency through automated processes.
                    </p>
                </div>
                <div className="service">
                    <span>📈</span>
                    <h3>Ads Manager</h3>
                    <p>
                        Optimize your advertising campaigns with data-driven insights and effective management.
                    </p>
                </div>
            
            </div>
        </div>
        <hr className='mt-5' />
</div>

{/*     LAST SECTION :  CONTAAACT */}
<Contact />

<Footer />












</div>
  );
};

export default Home;
