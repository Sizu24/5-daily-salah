import React from "react";

function SalahDua({ showEnglish }) {
  {if (!showEnglish) {
  return (
    <div className="steps-description js-description">
      <h3 className="steps-description__title">Dua</h3>
      <ol className="steps-description__body">
        <li className="steps-description__item">
          This is a Dua ending the prayer
        </li>
        <li className="steps-description__item">
          <strong>"Allahumma inni zalamtu, nafsi zulman"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"kathiran wa la yaghfirudh dhunuba"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"illa anta faghfirli maghfiratan min indika"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"wa arhamni innaka"</strong>
        </li>
        <li className="steps-description__item">
          <strong>"antal ghafurur rahim"</strong>
        </li>
      </ol>
    </div>
  );
  } else {
    return (
      <div className="steps-description js-description">
        <h3 className="steps-description__title">Dua</h3>
        <ol className="steps-description__body">
          <li className="steps-description__item">
            This is a Dua ending the prayer
          </li>
          <li className="steps-description__item">
            <strong>"O Allah, I have been unjust to myself, and no-one grants pardon for sins except You"</strong>
          </li>
          <li className="steps-description__item">
            <strong>"therefore, forgive me with Your forgiveness"</strong>
          </li>
          <li className="steps-description__item">
            <strong>"and have mercy on me."</strong>
          </li>
          <li className="steps-description__item">
            <strong>"Surely you are the Forgiver the Merciful."</strong>
          </li>
        </ol>
      </div>
    );
  }}
}

export default SalahDua;
