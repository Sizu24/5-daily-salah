import { useState, useEffect } from "react";

import SalahIntention from "./Salah/SalahIntention";
import SalahPreparing from "./Salah/SalahPreparing";
import SalahTakbir from "./Salah/SalahTakbir";
import SalahQiyam from "./Salah/SalahQiyam";
import SalahAlFatiha from "./Salah/SalahAlFatiha";
import SalahRuku from "./Salah/SalahRuku";
import SalahStand from "./Salah/SalahStand";
import SalahSujud from "./Salah/SalahSujud";
import SalahQuood from "./Salah/SalahQuood";

function Salah() {

  let [activeComponent, setActiveComponent] = useState('Preparing');

  const steps = [
    { name: 'Preparing', component: 'SalahPreparing'},
    { name: 'Intention', component: 'SalahIntention'},
    { name: 'Takbir', component: 'SalahTakbir'},
    { name: 'Qiyam', component: 'SalahQiyam'},
    { name: 'Al Fatiha', component: 'SalahAlFatiha'},
    { name: 'Ruku', component: 'SalahRuku'},
    { name: 'Stand', component: 'SalahStand'},
    { name: 'Sujud', component: 'SalahSujud'},
    { name: 'Quood', component: 'SalahQuood'},
    { name: 'Sujud', component: 'SalahSujud'},
  ];

  useEffect(() => {
    setActiveComponent(steps[0].component);
  },[]);

  function renderComponent() {
    switch(activeComponent) {
      case 'SalahPreparing':
        return <SalahPreparing />;
      case 'SalahIntention':
        return <SalahIntention />;
      case 'SalahTakbir': 
        return <SalahTakbir />;
      case 'SalahQiyam':
        return <SalahQiyam />;
      case 'SalahAlFatiha':
        return <SalahAlFatiha />;
      case 'SalahRuku':
        return <SalahRuku />;
      case 'SalahStand':
        return <SalahStand />;
      case 'SalahSujud':
        return <SalahSujud />;
      case 'SalahQuood':
        return <SalahQuood />;
      default:
        return null;
    }
  }

  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
    });
  }

  return (
    <div className="salah" id="salah">
      <div className="section">
        <h2 className="section__title">Salah (Prayer)</h2>
        <h3 className="section__subhead">
          This is the prayer step-by-step. Follow from top to bottom.
        </h3>
        <div className="section-content">
          <div className="salah-text">
            <div className="steps js-steps-list">
              <ul className="steps-list">
                {steps.map((step, index) => {
                  return(
                    <li key={index} className="steps-list__item">
                      <button onClick={handleClick} className="steps-list__button">
                        {step.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {renderComponent()}
            </div>
          </div>

          <div className="section-media">
            <img src="../src/images/wudu-image1.png" alt="" className="section-media__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salah;
