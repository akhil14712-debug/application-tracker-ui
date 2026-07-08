import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="app-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>StageWise</h3>
          <p>Track every application. Never lose momentum.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/listAppli">My Applications</a></li>
            <li><a href="/addAppli">Add Application</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <div className="footer-icons">
            <a href="https://github.com/AKHIL_1471" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/akhil14712-debug" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:akhil14712@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      <p className="footer-bottom">
        © {year} StageWise. Built by Akhil M A.
      </p>
    </footer>
  
  )
}

export default Footer