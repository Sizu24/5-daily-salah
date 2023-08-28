import React, { createContextuseState } from "react";
import Fajr from "./Prayer/Fajr";
import Dhuhr from "./Prayer/Dhuhr";
import Asr from "./Prayer/Asr";
import Maghrib from "./Prayer/Maghrib";
import Isha from "./Prayer/Isha";

import { useTheme } from "./ThemeContext";

function Salah() {

  const { prayer, setPrayer } = useTheme();


  function showPrayer() {
    switch(prayer) {
      case 'fajr':
        return <Fajr />;
      case 'dhuhr':
        return <Dhuhr />;
      case 'asr': 
        return <Asr />;
      case 'maghrib':
        return <Maghrib />;
      case 'isha':
        return <Isha />;
      default:
        return null;
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setPrayer(value);
  }

  return (
      <div className={`salah salah--${prayer}`} id="salah">
        <div className="section">
          <h2 className={`section__title section__title--${prayer}`}>Salah (Prayer)</h2>
          <h3 className={`section__subhead section__subhead--${prayer}`}>
            This is the prayer step-by-step. Follow from top to bottom.
          </h3>

          <div className="dropdown-section">
            <label className={`dropdown__label dropdown__label--${prayer}`} htmlFor="dropdown">Select Prayer:</label>
            <select className={`dropdown dropdown--${prayer}`} onChange={handleChange} id="dropdown">
              <option value="">--Choose--</option>
              <option value="fajr">Fajr (dawn)</option>
              <option value="dhuhr">Dhuhr (midday)</option>
              <option value="asr">Asr (afternoon)</option>
              <option value="maghrib">Maghrib (sunset)</option>
              <option value="isha">Isha (night)</option>
            </select>
          </div>
          {showPrayer()}
        </div>
      </div>
  );
}

export default Salah;
