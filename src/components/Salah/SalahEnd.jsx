import React from "react";

function SalahEnd({ showEnglish }) {
  {if (!showEnglish) {
  return (
    <div className="steps-description js-description">
      <h3 className="steps-description__title">End</h3>
      <ol className="steps-description__body">
        <li className="steps-description__item">
          Now you turn your head to the <strong>right</strong> and say:
        </li>
        <li className="steps-description__item">
          <strong>"Assalamu Alaikum Wa Rahmatullah"</strong>
        </li>
        <li className="steps-description__item">
          Now you turn your head to the <strong>left</strong> and say:
        </li>
        <li className="steps-description__item">
          <strong>"Assalamu Alaikum Wa Rahmatullah"</strong>
        </li>
        <li className="steps-description__item">
          This completes the prayer, and you can now perform your own Dua.
        </li>
      </ol>
    </div>
  );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">End</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Now you turn your head to the <strong>right</strong> and say:
          </li>
          <li className="steps-description__item">
            <strong>"Peace and the mercy of Allah be upon you."</strong>
          </li>
          <li className="steps-description__item">
            Now you turn your head to the <strong>left</strong> and say:
          </li>
          <li className="steps-description__item">
            <strong>"Peace and the mercy of Allah be upon you."</strong>
          </li>
          <li className="steps-description__item">
            This completes the prayer, and you can now perform your own Dua.
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahEnd;
