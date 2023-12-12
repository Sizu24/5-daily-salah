import React from "react";

function SalahAlFatiha({ showEnglish }) {

  { if (!showEnglish) {
      return (
        <div className="steps-description js-description">
          <h3 className="steps-description__title">Al-Fatiha (1st surah of the Quran)</h3>
          <ol className="steps-description__body">
            <li className="steps-description__item">
              While standing, recite surah Al-Fatiha:
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
    } else {
      return (
        <div className="steps-description js-description">
          <h3 className="steps-description__title">Al-Fatiha (1st surah of the Quran)</h3>
          <ol className="steps-description__body">
            <li className="steps-description__item">
              While standing, recite surah Al-Fatiha:
            </li>
            <li className="steps-description__item">
              <strong>"In the name of Allah, the most Merciful, the most Kind."</strong>
            </li>
            <li className="steps-description__item">
              <strong>
              "All praise is for Allah, the Lord of the Universe, the most Merciful, the most Kind;
               Master of the day of judgement. You alone we worship, from You alone we seek help. Guide us along
               the straight path, the path of those whom You favoured, not of those who earned Your anger or went
               astray."
            </strong>
            </li>
            <li className="steps-description__item">
              Then recite another verse from the Quran such as:
              <strong>
                "In the name of Allah, the most Merciful, the most Kind.
                Say, He is Allah, the One. Allah is Eternal and Absolute. None is born of Him 
                nor is He born and there is none like Him."
              </strong>
            </li>
          </ol>
        </div>
      );
    }
  }
}

export default SalahAlFatiha;
