import React from 'react';
import '../CSS/Footer.css'; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Shubham</span> Chikhale</h1>
          <p>
            Shubham Rajendra Chikhale's portfolio showcasing web development skills and projects.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +91 12345 67890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; shubham@example.com</span>
          </div>
          <div className="socials">
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Services</li></a>
            <a href="/"><li>Projects</li></a>
            <a href="/"><li>Contact</li></a>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Me</h2>
          <br />
          <form action="index.html" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; shubhamportfolio.com | Designed by Shubham Chikhale
      </div>
    </footer>
  );
};

export default Footer;
