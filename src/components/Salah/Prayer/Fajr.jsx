import React, { useEffect, useState } from "react";
import SalahIntention from "../SalahIntention"
import SalahPreparing from "../SalahPreparing";
import SalahTakbir from "../SalahTakbir";
import SalahQiyam from "../SalahQiyam";
import SalahAlFatiha from "../SalahAlFatiha";
import SalahRuku from "../SalahRuku";
import SalahStand from "../SalahStand";
import SalahSujud from "../SalahSujud";
import SalahQuood from "../SalahQuood";

function Fajr() {

  const [rakat, setRakat] = useState("");
  const [activeComponent, setActiveComponent] = useState('Preparing');

  const rakats = [
    { name: 'rakat 1', component: 'OneRakat'},
    { name: 'rakat 2', component: 'TwoRakat'},
  ]

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


  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
    });
  }

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

  return (
    <>
      <div className="section-categories">
        <ul className="section-categories__list">
          {rakats.map((rakat, index) => {
            return (
              <li key={index} className="section-categories__list-item">
                <button className="section-categories__list-button" onClick={handleClick}>{rakat.name}</button>
              </li>
            );
          })}
        </ul>
      </div>


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
    </>
  );
}

export default Fajr;
