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
import SalahStandUp from "../SalahStandUp";

import handsEars from "../../../images/handsears.png";
import standing from "../../../images/standing.png";
import ruku from "../../../images/ruku.png";
import standStraight from "../../../images/standstraight.png";
import sujud from "../../../images/sujud.png";
import sit from "../../../images/sit.png";

import { useTheme } from "../ThemeContext";

function RakatOne({ getImage }) {

  const { prayer } = useTheme();

  const stepsList = [
    { name: 'Preparing', component: 'SalahPreparing', image: standStraight},
    { name: 'Intention', component: 'SalahIntention', image: handsEars},
    { name: 'Takbir', component: 'SalahTakbir', image: standing},
    { name: 'Qiyam', component: 'SalahQiyam', image: standing},
    { name: 'Al Fatiha', component: 'SalahAlFatiha', image: standing},
    { name: 'Ruku', component: 'SalahRuku', image: ruku},
    { name: 'Stand', component: 'SalahStand', image: standStraight},
    { name: 'Sujud', component: 'SalahSujud', image: sujud},
    { name: 'Quood', component: 'SalahQuood', image: sit},
    { name: 'Sujud (repeat)', component: 'SalahSujud', image: sujud},
    { name: 'Stand Up', component: 'SalahStandUp', image: standing},
  ];

  const [activeComponent, setActiveComponent] = useState('SalahPreparing');
  const [activeButton, setActiveButton] = useState(stepsList[0].name);
  const [steps, setSteps] = useState(stepsList);

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
      case 'SalahStandUp':
        return <SalahStandUp />;
      default:
        return null;
    }
  }

  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
      value === step.name && getImage(step.image);
      value === step.name && setActiveButton(step.name);
    });
  }

  return(
    <>
      <div className="steps js-steps-list">
        <ul className="steps-list">
          {steps.map((step, index) => {
            return(
              <li key={index} className="steps-list__item">
                <button onClick={handleClick} className={activeButton === step.name ? `steps-list__button steps-list__button--${prayer} selected` : `steps-list__button steps-list__button--${prayer}`} >
                  {step.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={`steps-description__container--${prayer}`}>
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default RakatOne;