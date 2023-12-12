import React, { useState, useEffect } from "react";
import SalahAlFatiha from "../SalahAlFatiha";
import SalahRuku from "../SalahRuku";
import SalahStand from "../SalahStand";
import SalahSujud from "../SalahSujud";
import SalahQuood from "../SalahQuood";
import SalahStandUp from "../SalahStandUp";
import SalahAtTashahhud from "../SalahAtTashahhud";
import SalahAsSalahAlanNabiyy from "../SalahAsSalahAlanNabiyy";
import SalahDua from "../SalahDua";
import SalahEnd from "../SalahEnd";
import Translate from "../Translate";

import handsEars from "../../../images/handsears.png";
import standing from "../../../images/standing.png";
import ruku from "../../../images/ruku.png";
import standStraight from "../../../images/standstraight.png";
import sujud from "../../../images/sujud.png";
import sit from "../../../images/sit.png";
import sitpoint from "../../../images/sitpoint.png";
import end from "../../../images/end.png";

import { useTheme } from "../ThemeContext";

function RakatTwo({ lastRakat, getImage, stand }) {

  const { prayer } = useTheme();

  let stepsList = [
    { name: 'Al Fatiha', component: 'SalahAlFatiha', image: standing},
    { name: 'Ruku', component: 'SalahRuku', image: ruku},
    { name: 'Stand', component: 'SalahStand', image: standStraight},
    { name: 'Sujud', component: 'SalahSujud', image: sujud},
    { name: 'Quood', component: 'SalahQuood', image: sit},
    { name: 'Sujud (repeat)', component: 'SalahSujud', image: sujud},
    { name: 'At-Tashahhud', component: 'SalahAtTashahuud', image: sitpoint},
    { name: 'Stand Up', component: 'SalahStandUp', image: standing},
    { name: 'As-Salah alan nabiyy', component: 'SalahAsSalahAlanNabiyy', image: sit},
    { name: 'Dua', component: 'SalahDua', image: sit},
    { name: 'End', component: 'SalahEnd', image: end},
  ];

  const [activeComponent, setActiveComponent] = useState('Al Fatiha');
  const [activeButton, setActiveButton] = useState(stepsList[0].name);
  const [steps, setSteps] = useState(stepsList);
  const [translate, setTranslate] = useState(false);

  function renderComponent() {
    if (activeComponent === 'SalahStandUp' && stand === false) {
      return <SalahStandUp />
    } else {
      switch(activeComponent) {
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
        case 'SalahAtTashahuud':
          return <SalahAtTashahhud showEnglish={translate} />;
        case 'SalahStandUp':
          return <SalahStandUp showEnglish={translate} />;
        case 'SalahAsSalahAlanNabiyy':
          return <SalahAsSalahAlanNabiyy showEnglish={translate} />;
        case 'SalahDua':
          return <SalahDua showEnglish={translate} />;
        case 'SalahEnd':
          return <SalahEnd showEnglish={translate} />;
        default:
          return null;
      }
    }
  }

  // if last rakat --- false, show stand up
    // else show as salah alan nabiyy, dua, and end. Do not show stand up

  useEffect(() => {
    setActiveComponent(steps[0].component);
    createSteps();
  },[]);

  function createSteps() {
    setSteps(stepsList);
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

  return (
    <>
      <div className="steps js-steps-list">
        <ul className="steps-list">
          {steps.map((step, index) => 
            (lastRakat === true && stand === false && step.name === "Stand Up") ||
            (lastRakat === false && stand === true && ["As-Salah alan nabiyy", "Dua", "End"].includes(step.name)) ? null 
            : ( 
              <li key={index} className="steps-list__item">
                <button onClick={handleClick} className={activeButton === step.name ? `steps-list__button steps-list__button--${prayer} selected` : `steps-list__button steps-list__button--${prayer}`} >
                  {step.name}
                </button>
              </li>
            )
          )}
        </ul>
        <Translate prayer={prayer} handleTranslate={handleTranslate} translate={translate} />
        <div className={`steps-description__container--${prayer}`}>
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default RakatTwo;