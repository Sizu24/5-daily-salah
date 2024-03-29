import React, { useState, useEffect } from "react";

import WuduIntention from "./WuduIntention";
import WuduHands from "./WuduHands";
import WuduMouth from "./WuduMouth";
import WuduNose from "./WuduNose";
import WuduFace from "./WuduFace";
import WuduArms from "./WuduArms";
import WuduHair from "./WuduHair";
import WuduEars from "./WuduEars";
import WuduFeet from "./WuduFeet";

import wuduHands from "../../images/wuduhands.png";
import wuduMouth from "../../images/wudumouth.png";
import wuduFace from "../../images/wuduface.png";
import wuduArms from "../../images/wuduarms.png";
import wuduEars from "../../images/wuduears.png";
import wuduHair from "../../images/wuduhair.png";
import wuduFeet from "../../images/wudufeet.png";

function Wudu() {

  const [activeComponent, setActiveComponent] = useState('WuduIntention');
  const [activeImage, setActiveImage] = useState(wuduHands);
  const [activeButton, setActiveButton] = useState('Intention');
  

  const steps = [
    { name: 'Intention', component: 'WuduIntention', image: wuduHands},
    { name: 'Hands', component: 'WuduHands', image: wuduHands},
    { name: 'Mouth', component: 'WuduMouth', image: wuduMouth},
    { name: 'Nose', component: 'WuduNose', image: wuduFace},
    { name: 'Face', component: 'WuduFace', image: wuduFace},
    { name: 'Arms', component: 'WuduArms', image: wuduArms},
    { name: 'Hair', component: 'WuduHair', image: wuduHair},
    { name: 'Ears', component: 'WuduEars', image: wuduEars},
    { name: 'Feet', component: 'WuduFeet', image: wuduFeet},
  ];

  useEffect(() => {
    setActiveComponent(steps[0].component);
  },[]);

  function renderComponent() {
    switch (activeComponent) {
      case 'WuduIntention':
        return <WuduIntention />;
      case 'WuduHands':
        return <WuduHands />;
      case 'WuduMouth':
        return <WuduMouth />;
      case 'WuduNose':
        return <WuduNose />;
      case 'WuduFace':
        return <WuduFace />;
      case 'WuduArms':
        return <WuduArms />;
      case 'WuduHair':
        return <WuduHair />;
      case 'WuduEars':
        return <WuduEars />;
      case 'WuduFeet':
        return <WuduFeet />;
      default:
        return null;
    }
  }

  function handleClick(e) {
    const value = e.target.textContent;

    steps.map((step) => {
      value === step.name && setActiveComponent(step.component);
      value === step.name && setActiveImage(step.image);
      value === step.name && setActiveButton(step.name);
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
                    <button onClick={handleClick} className={activeButton === step.name ? "steps-list__button selected" : "steps-list__button"}>
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
          <img src={activeImage} alt="" className="section-media__image" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Wudu;
