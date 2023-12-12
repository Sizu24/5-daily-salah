import React from "react";

function SalahQiyam({ showEnglish }) {
  {if (!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Qiyam</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Recite the following:
          </li>
          <li className="steps-description__item">
            <strong>"Subhanaka allahumma, wa bi hamdika, wa tabara kasmuka, wa ta ala jadduka, wa la ilaha ghairuka"</strong>
          </li>
          <li className="steps-description__item">
            <strong>"A udhu billahi minash shaitanir rajim"</strong>
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Qiyam</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Recite the following:
          </li>
          <li className="steps-description__item">
            <strong>
              "O Allah, glory and praise are for You, an blessed is Your name,
              and exalted is Your Majesty; there is no god but You."
            </strong>
          </li>
          <li className="steps-description__item">
            <strong>"I seek shelter in Allah from the rejected satan"</strong>
          </li>
        </ol>
      </div>
    );
   }
  }
}

export default SalahQiyam;
