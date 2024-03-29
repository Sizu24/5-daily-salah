import React, { useEffect, useState } from "react";
import RakatOne from "../Rakat/RakatOne";
import RakatTwo from "../Rakat/RakatTwo";
import RakatThree from "../Rakat/RakatThree";
import { useTheme } from "../ThemeContext";

import standStraight from "../../../images/standstraight.png";

function Maghrib() {
    const { prayer } = useTheme();

  const rakats = [
    { name: 'rakat 1', component: 'RakatOne'},
    { name: 'rakat 2', component: 'RakatTwo'},
    { name: 'rakat 3', component: 'RakatThree'},
  ]

  const [rakat, setRakat] = useState(rakats[0].name);
  const [activeButton, setActiveButton] = useState(rakats[0].name);
  const [activeImage, setActiveImage] = useState(standStraight);

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
        return <RakatTwo lastRakat={false} getImage={salahImage} stand={true} />;
      case "rakat 3" :
        return <RakatThree lastRakat={true} getImage={salahImage} stand={false} />;
      default:
        return null;
    }
  }

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

export default Maghrib;
