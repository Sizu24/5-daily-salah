import { useState, useEffect } from "react";
import Fajr from "./Salah/Prayer/Fajr";
import Dhuhr from "./Salah/Prayer/Dhuhr";
import Asr from "./Salah/Prayer/Asr";
import Maghrib from "./Salah/Prayer/Maghrib";
import Isha from "./Salah/Prayer/Isha";

function Salah() {

  const [rakat, setRakat] = useState("");
  const [prayer, setPrayer] = useState("");
  const [activeComponent, setActiveComponent] = useState('Preparing');

  const rakats = [
    { name: 'rakat 1', component: 'OneRakat'},
    { name: 'rakat 2', component: 'TwoRakat'},
    { name: 'rakat 3', component: 'ThreeRakat'},
    { name: 'rakat 4', component: 'FourRakat'},
  ]

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
    <div className="salah" id="salah">
      <div className="section">
        <h2 className="section__title">Salah (Prayer)</h2>
        <h3 className="section__subhead">
          This is the prayer step-by-step. Follow from top to bottom.
        </h3>

        <div className="dropdown-section">
          <label className="dropdown__label" htmlFor="dropdown">Select Prayer:</label>
          <select className="dropdown" onChange={handleChange} id="dropdown">
            <option value="">--Choose--</option>
            <option value="fajr">Fajr</option>
            <option value="dhuhr">Dhur</option>
            <option value="asr">Asr</option>
            <option value="maghrib">Maghrib</option>
            <option value="isha">Isha</option>
          </select>
        </div>
        {showPrayer()}
      </div>
    </div>
  );
}

export default Salah;
