import React from "react";

function SalahRuku({ showEnglish }) {
  {if (!showEnglish) {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Ruku</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
          Bow down while saying  <strong>"Allahu Abkar" </strong>. Place your hands on your knees and say:
          </li>
          <li className="steps-description__item">
          <strong>"Subhana Rabbiyal Azim"</strong> (three times)
          </li>
        </ol>
      </div>
    );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Ruku</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
          Bow down while saying  <strong>"God is Greater" </strong>. Place your hands on your knees and say:
          </li>
          <li className="steps-description__item">
          <strong>"Glory to my Lord, the Great"</strong> (three times)
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahRuku;
