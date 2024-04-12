import React from "react";

function BasicsIntro() {
  return (
    <div className="section-text js-basics-text show" id="basics-intro" data-category="intro">
      <h3 className="section-text__title">Introduction</h3>
      <p className="section-text__body">
        This website is intended to cover the basics of the 5 daily prayers. 
        It is meant to be a resource for Muslims who are new to praying. This can also be used as a supplement to learning from videos online.
      </p>
      <p className="section-text__body">
        Take it slow, and don't worry if you don't get everything right away.
        It might also help to start with just getting down the 2 rakat prayer (Fajr), since the 4 rakat prayers are basically like repeating the 2 rakat prayer.
      </p>
      <p className="section-text__body">
        <strong>Tip:</strong> Try memorizing by breaking everything into smaller parts. Memorize the first part of a Rakat, then add more as you get comfortable.
      </p>
    </div>
  );
}

export default BasicsIntro;
