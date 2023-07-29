import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero__image"></div>
      <div className="hero-content">
        <h1 className="hero-content__title">Learn Salah</h1>
        <p className="hero-content__body">
          Simple step-by-step guide for muslims that want to learn how to pray.
        </p>
        <Link to="wudu" className="hero-content__cta" smooth="true">Start Learning</Link>
      </div>
      </div>
  );
}

export default Hero;
