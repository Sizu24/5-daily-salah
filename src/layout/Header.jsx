import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

function Header() {
  return (
    <header className="header js-header">
      <img className="header__logo" src="" alt="" />
      <Nav />
      <NavMobile />
    </header>
  );
}

export default Header;
