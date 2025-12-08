import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="slskdn-footer">
      <div className="slskdn-footer-content">
        <span className="slskdn-footer-copyright">
          © {year} <a href="https://github.com/snapetech/slskdn" target="_blank" rel="noopener noreferrer">slskdn</a>
        </span>
        <span className="slskdn-footer-divider">•</span>
        <a 
          className="slskdn-footer-link"
          href="https://github.com/snapetech/slskdn" 
          target="_blank" 
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Icon name="github" /> GitHub
        </a>
        <span className="slskdn-footer-divider">•</span>
        <a 
          className="slskdn-footer-link"
          href="https://discord.gg/NRzj8xycQZ" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Discord"
        >
          <Icon name="discord" /> Discord
        </a>
        <span className="slskdn-footer-divider">•</span>
        <span className="slskdn-footer-quote">
          <em>"slop on top"</em> 🍦🤖✨
        </span>
      </div>
    </footer>
  );
};

export default Footer;

