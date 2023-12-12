import React from "react";

function SalahAtTashahhud({ showEnglish }) {
  {if(!showEnglish) {
  return (
    <div className="steps-description js-description">
      <h3 className="steps-description__title">Takbir</h3>
      <ol className="steps-description__body">
        <li className="steps-description__item">
          Sit upright and recite:
        </li>
        <li className="steps-description__item">
          <strong>At-Tahiyyatu Lillahi</strong>
        </li>
        <li className="steps-description__item">
          <strong>Was Salawatu Wat Tayyibatu</strong>
        </li>
        <li className="steps-description__item">
          <strong>As-Salamu 'Alaika Ayyuhannabiyyu</strong>
        </li>
        <li className="steps-description__item">
          <strong>Wa Rahmatullahi Wa Barakatuhu</strong>
        </li>
        <li className="steps-description__item">
          <strong>Assalamu Alaina Wa Ala Ibadillahis Salihim</strong>
        </li>
        <li className="steps-description__item">
          <strong>Ash Hadu An Lailaha Illal Lahu</strong>
        </li>
        <li className="steps-description__item">
          <strong>Wa Ash Hadu Anna Muhammadan Abduhu Wa Rasuluhu</strong>
        </li>
      </ol>
    </div>
  );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Takbir</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            Sit upright and recite:
          </li>
          <li className="steps-description__item">
            <strong>All prayer is for Allah</strong>
          </li>
          <li className="steps-description__item">
            <strong>and worship and goodness.</strong>
          </li>
          <li className="steps-description__item">
            <strong>Peace be upon you, O Prophet</strong>
          </li>
          <li className="steps-description__item">
            <strong>and the mercy of Allah and His blessings.</strong>
          </li>
          <li className="steps-description__item">
            <strong>Peace be upon us, and on the righteous servants of Allah.</strong>
          </li>
          <li className="steps-description__item">
            <strong>I bear witness that there is no god but Allah</strong>
          </li>
          <li className="steps-description__item">
            <strong>and I bear witness that Muhammad is His servant and messenger.</strong>
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahAtTashahhud;
