import React from "react";

function SalahStandUp({ showEnglish }) {
  {if(!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Stand Up</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Stand up from the Sujud position while saying <strong>"Allahu Akbar"</strong>, and perform next Rakat.
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Stand Up</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Stand up from the Sujud position while saying <strong>"God is Greater."</strong>, and perform next Rakat.
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahStandUp;
