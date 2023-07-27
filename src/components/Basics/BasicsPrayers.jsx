import React, { useState } from "react";

function BasicsPrayers() {

  let [activePrayer, setActivePrayer] = useState('This is the morning prayer, which has TWO rakats.');

  const prayers = [
    {name: 'Fajr', description: 'This is the morning prayer, which has TWO rakats.'},
    {name: 'Dhur', description:'This is the afternoon prayer, which has FOUR rakats.'},
    {name: 'Asr', description:'This is the mid-day prayer, which has FOUR rakats.'},
    {name: 'Maghrib', description:'This is the evening prayer, which has THREE rakats.'},
    {name: 'Isha', description:' This is the night prayer, which has FOUR rakats.'},
  ]

  function handleClick(e) {
    const value = e.target.textContent;
    prayers.map((prayer) => {
      prayer.name === value && setActivePrayer(prayer.description);
    });
  }

  return (
    <div className="section-text" data-category="prayers">
      <h3 className="section-text__title">The 5 prayers</h3>
      <div className="steps">
        <ul className="steps-list">
          {prayers.map((prayer, index) => {
            return (
            <li key={index} className="steps-list__item">
              <button className="steps-list__button" onClick={handleClick}>
                {prayer.name}
              </button>
            </li>
            );
          })}
        </ul>

        <div className="steps__description">
          <h3 className="steps-description__title">{activePrayer.name}</h3>
          <ul className="steps-description__body">
            <li className="steps-description__item" data-description="Fajr">
              {activePrayer}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BasicsPrayers;
