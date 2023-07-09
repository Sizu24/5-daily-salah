import React from "react";

function SalahAlFatiha() {
  return (
    <div className="steps-description js-description">
      <h3 className="steps-description__title">Al-Fatiha (1st surah of the Quran)</h3>
      <ol className="steps-description__body">
        <li className="steps-description__item">
          While still standing, recite surah Al-Fatiha:
        </li>
        <li className="steps-description__item">
          <strong>"Bismillahir rahmanir rahim"</strong>
        </li>
        <li className="steps-description__item">
          <strong>
          "Al hamdu lil lahi rabbil alamin. Arrahmanir rahim. Maliki Yawmuddin. Iyyaka na'budu wa iyyaka nasta'in.
          Ihdinas siratal mustaqim. Siratal ladhina an amta alaihim, ghairil maghdubi alaihim wa la dallin. Amin"
        </strong>
        </li>
        <li className="steps-description__item">
          Then recite another verse from the Quran such as:
          <strong>"Bismillahir rahmanir rahim. Qul hu wal lahu ahad, allahus samad, lam yalid, wa lam yulad, wa lam ya kul lahu kufuwan ahad"</strong>
        </li>
      </ol>
    </div>
  );
}

export default SalahAlFatiha;
