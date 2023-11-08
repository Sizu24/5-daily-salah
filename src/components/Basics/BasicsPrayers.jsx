import React, { useState } from "react";

function BasicsPrayers() {

  const [activePrayer, setActivePrayer] = useState('This is the morning prayer, which has TWO rakats.');

  const prayers = [
    {name: 'Fajr', description: 'This is the morning prayer, which has TWO rakats.'},
    {name: 'Dhuhr', description:'This is the afternoon prayer, which has FOUR rakats.'},
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
      <p className="section-text__body">

      Muslims perform five daily prayers that fall into three main categories:

Obligatory Prayers (Fard/Faradh): These are the core prayers Muslims must perform daily. They include Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (evening), and Isha (night).

Sunnah Prayers: While not required, Sunnah prayers are recommended and emulate the Prophet's (peach be upon him) example.

Optional Prayers (Nafl): Beyond the obligatory and Sunnah prayers, Muslims can engage in Nafl prayers. These are extra and offer a chance for personal devotion and supplication.

Remember to seek guidance and perform prayers with sincerity and humility. </p>
      <div className="steps steps--wide">
        <ul className="steps-list">
          {prayers.map((prayer, index) => {
            return (
            <li key={index} className="steps-list__item">
              <button className={activePrayer === prayer.description ? "steps-list__button selected" : "steps-list__button"} onClick={handleClick}>
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
