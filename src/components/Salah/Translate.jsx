import React, { useState } from "react";

const Translate = ({ prayer }) => {
  const [translate, setTranslate] = useState(false);

  const handleToggle = () => {
    setTranslate(!translate);
    console.log(translate);
  }

  return(
    <div className="translate">
      <p className={`translate__title translate__title--${prayer}`}>Translate Off/On</p>
      <div className={translate ? "toggle-button toggle-button--on" : "toggle-button"}>
        <div className="toggle-button__handle" onClick={handleToggle}></div>
      </div>
    </div>
  );  
}

export default Translate;