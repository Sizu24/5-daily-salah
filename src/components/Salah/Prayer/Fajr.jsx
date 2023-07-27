import React, { useState, useEffect } from "react";
import RakatOne from "../Rakat/RakatOne";
import RakatTwo from "../Rakat/RakatTwo";

function Fajr() {

  const [rakat, setRakat] = useState("");

  const rakats = [
    { name: 'rakat 1', component: 'RakatOne'},
    { name: 'rakat 2', component: 'RakatTwo'},
  ]

  useEffect(() => {
    setRakat(rakats[0].name);
  },[]);

  function handleClick(e) {
    const value = e.target.textContent;
    rakats.map((rakat) => {
      rakat.name === value  && setRakat(value);
    });
  }

  function showRakat() {
    switch(rakat) {
      case "rakat 1" :
        return <RakatOne />;
      case "rakat 2" :
        return <RakatTwo />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="section-categories">
        <ul className="section-categories__list">
          {rakats.map((rakat, index) => {
            return (
              <li key={index} className="section-categories__list-item">
                <button className="section-categories__list-button" onClick={handleClick}>{rakat.name}</button>
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
          <img src="../src/images/wudu-image1.png" alt="" className="section-media__image" />
        </div>
      </div>
    </>
  );
}

export default Fajr;