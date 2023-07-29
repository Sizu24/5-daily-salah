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

function RakatFour(lastRakat) {
  const [activeComponent, setActiveComponent] = useState('Preparing');

  const steps = [
    { name: 'Al Fatiha', component: 'SalahAlFatiha'},
    { name: 'Ruku', component: 'SalahRuku'},
    { name: 'Stand', component: 'SalahStand'},
    { name: 'Sujud', component: 'SalahSujud'},
    { name: 'Quood', component: 'SalahQuood'},
    { name: 'Sujud', component: 'SalahSujud'},
    { name: 'At-Tashahhud', component: 'SalahAtTashahuud'},
    { name: 'As-Salah alan nabiyy', component: 'SalahAsSalahAlanNabiyy'},
    { name: 'Dua', component: 'SalahDua'},
    { name: 'End', component: 'SalahEnd'},
  ];

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

export default RakatFour;