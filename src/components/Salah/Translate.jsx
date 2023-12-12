import React, { useState } from "react";

const Translate = ({ prayer, handleTranslate, translate }) => {

  return(
    <div className="translate">
      <p className={`translate__title translate__title--${prayer}`}>Translate Off/On</p>
      <div className={translate ? "toggle-button toggle-button--on" : "toggle-button"}>
        <div className="toggle-button__handle" onClick={handleTranslate}></div>
      </div>
    </div>
  );  
}

export default Translate;