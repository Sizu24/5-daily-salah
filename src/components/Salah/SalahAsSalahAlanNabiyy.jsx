import React from "react";

function AsSalahAlanNabiyy({ showEnglish }) {
  {if (!showEnglish) {
  return (
    <div className="steps-description js-description">
      <h3 className="steps-description__title">As-Salah 'alan nabiyy</h3>
      <ol className="steps-description__body">
        <li className="steps-description__item">
          While still sitting upright, recite blessings for the Prophet:
        </li>
        <li className="steps-description__item">
          <strong>"Allahumma Salli Ala Muhammadin, Wa Ala Ali Muhammadin"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"Kama Sallaita Ala Ibrahima, Wa Ala Ali Ibrahima"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"Innaka Hamidun Majid"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"Allahumma Barik Ali Muhammadin, Wa Ala Ali Muhammadin"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"Kama Barakta Ala Ibrahima, Wa Ala Ali Ibrahima"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"Innaka Hamidun Majid"</strong>
        </li>
      </ol>
    </div>
  );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">As-Salah 'alan nabiyy</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            While still sitting upright, recite blessings for the Prophet:
          </li>
          <li className="steps-description__item">
            <strong>"O Allah, let your blessing come upon Muhammad, and the family of Muhammad."</strong>
          </li>
          <li className="steps-description__item">
            <strong>"as you blessed Ibrahim and his family."</strong>
          </li>
          <li className="steps-description__item">
            <strong>Truely You are the Praiseworthy and Glorious."</strong>
          </li>
          <li className="steps-description__item">
            <strong>"O Allah, bless Muhammad and the family of Muhammad"</strong>
          </li>
          <li className="steps-description__item">
            <strong>"as You blessed Ibrahim and his family."</strong>
          </li>
          <li className="steps-description__item">
            <strong>"Truely You are the Praiseworthy and Glorious."</strong>
          </li>
        </ol>
      </div>
    );
  }}
}

export default AsSalahAlanNabiyy;
