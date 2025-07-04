import React from 'react'
import './Footer.css'
import linkedin from '../Assets/linkedin.png'
import insta from '../Assets/insta.png'
import gmail from '../Assets/gmail.png'
import git from '../Assets/git.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a className="taps-link" href="https://taps.bio/yourusername" target="_blank" rel="noopener noreferrer">
          ✨ Check my Taps page
        </a>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/deema-jayousi" target="_blank" rel="noopener noreferrer">
                 <img src={linkedin} alt="LinkedIn" />
               </a>
               <a href="https://www.instagram.com/silver_lining134340" target="_blank" rel="noopener noreferrer">
                 <img src={insta} alt="Instagram" />
               </a>
               <a href="mailto:deemajayousi2004@gmail.com">
                 <img src={gmail} alt="Gmail" />
               </a>
               <a href="https://github.com/DimaJayyousi" target="_blank" rel="noopener noreferrer">
                 <img src={git} alt="GitHub" />
                 </a>
        </div>

        <p className="copyright">
          © 2025. All rights reserved 👑
        </p>
      </div>
    </footer>
  )
}

export default Footer
