import React from "react";
import "./Footer.css";
import linkedin from "../Assets/linkedin.png";
import insta from "../Assets/insta.png";
import gmail from "../Assets/gmail.png";
import git from "../Assets/git.png";
import you from "../Assets/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p >✨ Check my Taps page</p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/deema-jayousi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/silver_lining134340"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="mailto:deemajayousi2004@gmail.com">
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://github.com/DimaJayyousi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub" />
          </a>
          <a
            href="http://www.youtube.com/@Learntocode-rs3qs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={you} alt="you tube " />
          </a>
        </div>

        <p className="copyright">© 2025. All rights reserved 👑</p>
      </div>
    </footer>
  );
};

export default Footer;
