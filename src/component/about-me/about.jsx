import React from 'react'
import './about.css'
import me from '../Assets/me2.png'
import linkedin from '../Assets/linkedin.png'
import insta from '../Assets/insta.png'
import gmail from '../Assets/gmail.png'
import git from '../Assets/git.png'
import you from '../Assets/youtube.png'


const about = () => {
  return (
 <div className="all" id='me'>

  <div className="img">
    <img src={me} alt="" />
  </div>

  <div className="text">
    <h2>Hey there!</h2>
    <p>
      I’m a passionate Computer Information Systems student at the University of Jordan, blending creativity with technical skills to solve real-world problems. I’m all about learning, growing, and turning ideas into practical solutions — with a warm and professional approach. Whether it’s coding, teamwork, or exploring the latest tech trends, I’m here to make a positive impact and keep leveling up every day.
    </p>

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
       <a href="http://www.youtube.com/@Learntocode-rs3qs" target="_blank" rel="noopener noreferrer">
        <img src={you} alt="you tube " />
      </a>
    </div>
  </div>
</div>

    
  )
}

export default about
