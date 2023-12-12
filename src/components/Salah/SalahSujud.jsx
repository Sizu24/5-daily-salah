import React from "react";

function SalahSujud({ showEnglish }) {
  {if(!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Sujud</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Prostrate on the floor while saying <strong>"Allahu Akbar"</strong>. Make sure to have your forehead, nose, both palms and knees touching the floor and say:
        </li>
          <li className="steps-description__item">
            <strong>"Subhana Rabbiyal Ala"</strong> (three times) 
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Sujud</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Prostrate on the floor while saying <strong>"God is Greater"</strong>. Make sure to have your forehead, nose, both palms and knees touching the floor and say:
        </li>
          <li className="steps-description__item">
            <strong>"Glory to my Lord, the Highest"</strong> (three times) 
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahSujud;
