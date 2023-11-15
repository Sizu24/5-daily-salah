import React from 'react';
import { Link } from "react-scroll";

function NavMobile() {
  return (
    <>
      <div className="nav-toggle">
        <div className="nav-toggle__button"></div>
      </div>

      <nav className="nav-mobile">
        <ul className="nav-mobile-list">
          <li className="nav-mobile-list__item"><Link to="basics" smooth={true}>Basics</Link></li>
          <li className="nav-mobile-list__item"><Link to="wudu" smooth={true}>Wudu</Link></li>
          <li className="nav-mobile-list__item"><Link to="salah" smooth={true}>Salah</Link></li>
          <li className="nav-mobile-list__item"><Link to="info" smooth={true}>Info</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default NavMobile;