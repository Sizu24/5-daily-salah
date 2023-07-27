import React, { useState, useEffect } from "react";
import SalahIntention from "../SalahIntention"
import SalahPreparing from "../SalahPreparing";
import SalahTakbir from "../SalahTakbir";
import SalahQiyam from "../SalahQiyam";
import SalahAlFatiha from "../SalahAlFatiha";
import SalahRuku from "../SalahRuku";
import SalahStand from "../SalahStand";
import SalahSujud from "../SalahSujud";
import SalahQuood from "../SalahQuood";

function RakatThree() {
  const [activeComponent, setActiveComponent] = useState('Preparing');

  const steps = [
    { name: 'Takbir', component: 'SalahTakbir'},
    { name: 'Qiyam', component: 'SalahQiyam'},
    { name: 'Al Fatiha', component: 'SalahAlFatiha'},
    { name: 'Ruku', component: 'SalahRuku'},
    { name: 'Stand', component: 'SalahStand'},
    { name: 'Sujud', component: 'SalahSujud'},
    { name: 'Quood', component: 'SalahQuood'},
    { name: 'Sujud', component: 'SalahSujud'},
  ];

  function renderComponent() {
    switch(activeComponent) {
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

  useEffect(() => {
    setActiveComponent(steps[0].component);
  },[]);


  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
    });
  }

  return(
    <>
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
    </>
  );
}

export default RakatThree;