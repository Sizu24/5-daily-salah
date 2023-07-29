import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <ul className="footer-links">
            <li className="footer-links__item"><Link to="basics" smooth={true}>Basics</Link></li>
            <li className="footer-links__item"><Link to="wudu" smooth={true}>Wudu</Link></li>
            <li className="footer-links__item"><Link to="salah" smooth={true}>Salah</Link></li>
            <li className="footer-links__item"><Link to="info" smooth={true}>Info</Link></li>
          </ul>
        </div>
        <div className="footer-column"></div>
        <div className="footer-column"></div>
      </div>
      <div className="footer-legal">
        <p>©2023 Shah Chisty</p>
      </div>
    </footer>
  );
}

export default Footer;
