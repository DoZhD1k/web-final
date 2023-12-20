import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const [menu, setMenu] = useState("contact");

  
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>E-commerce</p>
      </div>
      <ul className="footer-links">
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: 'none' }} to='/about' className={menu === "about"}>
            About Us
          </Link>
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link style={{ textDecoration: 'none' }} to='/contact' className={menu === "contact"}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
