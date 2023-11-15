import React, { useState } from 'react';
import { Link } from "react-scroll";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  const closeNav = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={toggleNav}>
        <div className="nav-toggle__button"></div>
      </div>

      <nav className={`nav-mobile ${isOpen ? "show" : ""}`}>
        <ul className="nav-mobile-list">
          <li className="nav-mobile-list__item">
            <Link to="basics" smooth={true} onClick={closeNav}>Basics</Link>
          </li>
          <li className="nav-mobile-list__item">
            <Link to="wudu" smooth={true} onClick={closeNav}>Wudu</Link>
          </li>
          <li className="nav-mobile-list__item">
            <Link to="salah" smooth={true} onClick={closeNav}>Salah</Link>
          </li>
          <li className="nav-mobile-list__item">
            <Link to="info" smooth={true} onClick={closeNav}>Info</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMobile;