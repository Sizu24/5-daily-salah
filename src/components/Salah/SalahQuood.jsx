import React from "react";

function SalahQuood({ showEnglish }) {
  {if (!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Quood</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
              While saying "Allahu Akbar", sit upright, with your knees bent, and put your palms on your knees. 
        </li>
          <li className="steps-description__item">
              Here you can say the du'a <strong>"Rabbighfirli, wa arhamani, wahdini, wa'afini, warzuqni"</strong>.
        </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Quood</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
              While saying "God is Greater", sit upright, with your knees bent, and put your palms on your knees. 
        </li>
          <li className="steps-description__item">
              Here you can say the du'a <strong>"O Lord forgive me, and bless me with mercy, guide me, protect me from harm, and provide for me."</strong>.
        </li>
        </ol>
      </div>
    );
  }}
}

export default SalahQuood;
