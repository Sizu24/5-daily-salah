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
import Translate from "../Translate";

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
  const [translate, setTranslate] = useState(false);

  function renderComponent() {
    switch(activeComponent) {
      case 'SalahPreparing':
        return <SalahPreparing />;
      case 'SalahIntention':
        return <SalahIntention />;
      case 'SalahTakbir': 
        return <SalahTakbir showEnglish={translate} />;
      case 'SalahQiyam':
        return <SalahQiyam showEnglish={translate} />;
      case 'SalahAlFatiha':
        return <SalahAlFatiha showEnglish={translate} />;
      case 'SalahRuku':
        return <SalahRuku showEnglish={translate} />;
      case 'SalahStand':
        return <SalahStand showEnglish={translate} />;
      case 'SalahSujud':
        return <SalahSujud showEnglish={translate} />;
      case 'SalahQuood':
        return <SalahQuood showEnglish={translate} />;
      case 'SalahStandUp':
        return <SalahStandUp showEnglish={translate} />;
      default:
        return null;
    }
  }

  const handleTranslate = () => {
    setTranslate(!translate);
    console.log(translate);
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
        <div className={`steps-description__container--${prayer}`}> {/* prayer prop for light/dark class */}
          <Translate prayer={prayer} handleTranslate={handleTranslate} translate={translate}/>
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default RakatOne;