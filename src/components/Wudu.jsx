import React, { useState, useEffect } from "react";

import WuduIntention from "./Wudu/WuduIntention";
import WuduHands from "./Wudu/WuduHands";
import WuduMouth from "./Wudu/WuduMouth";
import WuduNose from "./Wudu/WuduNose";
import WuduFace from "./Wudu/WuduFace";
import WuduArms from "./Wudu/WuduArms";
import WuduHair from "./Wudu/WuduHair";
import WuduEars from "./Wudu/WuduEars";
import WuduFeet from "./Wudu/WuduFeet";

function Wudu() {

  let [activeComponent, setActiveComponent] = useState();

  const steps = [
    { name: 'Intention', component: WuduIntention},
    { name: 'Hands', component: WuduHands},
    { name: 'Mouth', component: WuduMouth},
    { name: 'Nose', component: WuduNose},
    { name: 'Face', component: WuduFace},
    { name: 'Arms', component: WuduArms},
    { name: 'Hair', component: WuduHair},
    { name: 'Ears', component: WuduEars},
    { name: 'Feet', component: WuduFeet},
  ];

  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
    });
  }

  return (
    <div className="wudu" id="wudu">
      <div className="section">
      <h2 className="section__title section__title--dark">Making Wudu</h2>
      <h3 className="section__subhead section__subhead--dark">
        The first steps to prepare for prayer.
      </h3>
      <div className="section-content">
        <div className="wudu-text">
          <div className="steps js-steps-list">
            <ul className="steps-list">
              {steps.map((step, index) => {
                return(
                  <li key={index} className="steps-list__item steps-list__item--dark">
                    <button onClick={handleClick} className="steps-list__button">
                      {step.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            {activeComponent}
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

export default Wudu;
