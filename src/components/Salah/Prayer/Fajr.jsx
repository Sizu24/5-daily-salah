import React, { useState, useEffect } from "react";
import RakatOne from "../Rakat/RakatOne";
import RakatTwo from "../Rakat/RakatTwo";
import { useTheme } from "../ThemeContext";

function Fajr() {

  const { prayer } = useTheme();
  const rakats = [
    { name: 'rakat 1', component: 'RakatOne'},
    { name: 'rakat 2', component: 'RakatTwo'},
  ]

  const [rakat, setRakat] = useState(rakats[0].name);
  const [activeButton, setActiveButton] = useState(rakats[0].name);
  const [activeImage, setActiveImage] = useState("../src/images/standstraight.png");

  function handleClick(e) {
    const value = e.target.textContent;
    rakats.map((rakat) => {
      rakat.name === value  && setRakat(value);
      rakat.name === value && setActiveButton(rakat.name);
    });
  }

  function showRakat() {
    switch(rakat) {
      case "rakat 1" :
        return <RakatOne getImage={salahImage} />;
      case "rakat 2" :
        return <RakatTwo lastRakat={true} getImage={salahImage} stand={false}/>;
      default:
        return null;
    }
  }

  /**

    fajr: 2 last
    Dhuhr: 4 last
    Asr: 4 last
    Maghrib: 3 last
    Isha: 4 last
   */

  function salahImage(image) {
    setActiveImage(image);
  }

  return (
    <>
      <div className="section-categories">
        <ul className="section-categories__list">
          {rakats.map((rakat, index) => {
            return (
              <li key={index} className="section-categories__list-item">
                <button className={activeButton === rakat.name ? `section-categories__list-button section-categories__list-button--${prayer} selected` : `section-categories__list-button section-categories__list-button--${prayer}`} onClick={handleClick}>{rakat.name}</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="section-content">
        <div className="salah-text">
          {showRakat()}
        </div>
        <div className="section-media">
          <img src={activeImage} alt="" className="section-media__image" />
        </div>
      </div>
    </>
  );
}

export default Fajr;
