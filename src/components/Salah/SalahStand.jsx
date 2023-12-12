import React from "react";

function SalahStand({ showEnglish }) {
  {if (!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Stand</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Stand up from the bowing position while saying:
          </li>
          <li className="steps-description__item">
          <strong>"Sami Allahu Liman Hamidah. Rabbana Lakal Hamd"</strong>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Stand</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Stand up from the bowing position while saying:
          </li>
          <li className="steps-description__item">
          <strong>"Allah hears those who praise Him. Our Lord, praise be to You."</strong>
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahStand;
