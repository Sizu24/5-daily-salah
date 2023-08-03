import React, { useState, useEffect } from "react";
import SalahAlFatiha from "../SalahAlFatiha";
import SalahRuku from "../SalahRuku";
import SalahStand from "../SalahStand";
import SalahSujud from "../SalahSujud";
import SalahQuood from "../SalahQuood";
import SalahAtTashahhud from "../SalahAtTashahhud";
import SalahAsSalahAlanNabiyy from "../SalahAsSalahAlanNabiyy";
import SalahDua from "../SalahDua";
import SalahEnd from "../SalahEnd";

import handsEars from "../../../images/handsears.png";
import standing from "../../../images/standing.png";
import ruku from "../../../images/ruku.png";
import standStraight from "../../../images/standstraight.png";
import sujud from "../../../images/sujud.png";
import sit from "../../../images/sit.png";
import sitpoint from "../../../images/sitpoint.png";
import end from "../../../images/end.png";

function RakatThree({lastRakat, getImage}) {

  let stepsList = [
    { name: 'Al Fatiha', component: 'SalahAlFatiha', image: standing},
    { name: 'Ruku', component: 'SalahRuku', image: ruku},
    { name: 'Stand', component: 'SalahStand', image: standStraight},
    { name: 'Sujud', component: 'SalahSujud', image: sujud},
    { name: 'Quood', component: 'SalahQuood', image: sit},
    { name: 'Sujud (repeat)', component: 'SalahSujud', image: sujud},
    { name: 'At-Tashahhud', component: 'SalahAtTashahuud', image: sitpoint},
    { name: 'As-Salah alan nabiyy', component: 'SalahAsSalahAlanNabiyy', image: sit},
    { name: 'Dua', component: 'SalahDua', image: sit},
    { name: 'End', component: 'SalahEnd', image: end},
  ];

  const [activeComponent, setActiveComponent] = useState('Preparing');
  const [activeButton, setActiveButton] = useState(stepsList[0].name);

  const [steps, setSteps] = useState(stepsList);

  function renderComponent() {
    switch(activeComponent) {
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
      case 'SalahAtTashahuud':
        return <SalahAtTashahhud />;
      case 'SalahAsSalahAlanNabiyy':
        return <SalahAsSalahAlanNabiyy />;
      case 'SalahDua':
        return <SalahDua />;
      case 'SalahEnd':
        return <SalahEnd />;
      default:
        return null;
    }
  }

  useEffect(() => {
    setActiveComponent(steps[0].component);
    createSteps();
  },[]);

  function checkIfLastRakat() {
    if (lastRakat === true) {
      return true;
    }
  }

  function createSteps() {
    const isLast = checkIfLastRakat();
    if (isLast) {
      setSteps(stepsList);
    } else {
      setSteps(stepsList.slice(0, -4));
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
                <button onClick={handleClick} className={activeButton === step.name ? "steps-list__button selected" : "steps-list__button"} >
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