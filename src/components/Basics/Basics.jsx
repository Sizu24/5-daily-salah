import React, { useState } from "react";

import BasicsPreparing from "./BasicsPreparing";
import BasicsRakat from "./BasicsRakat";
import BasicsWudu from "./BasicsWudu";
import BasicsPrayers from "./BasicsPrayers";
import BasicsDua from "./BasicsDua";

function Basics() {

  const categories = [
    {name: 'Preparing for Salah', component: 'BasicsPreparing'},
    {name: 'What is Wudu', component: 'BasicsWudu'},
    {name: 'What is a Rakat', component: 'BasicsRakat'},
    {name: 'The 5 Prayers', component: 'BasicsPrayers'},
    {name: 'What is Dua', component: 'BasicsDua'},
  ];

  const [activeComponent, setActiveComponent] = useState('BasicsPreparing');
  const [activeButton, setActiveButton] = useState(categories[0].name);

  function handleClick(e) {
    const value = e.target.textContent;
    categories.forEach((category) => {
      category.name === value && setActiveComponent(category.component);
      category.name === value && setActiveButton(category.name);
    });
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'BasicsPreparing':
        return <BasicsPreparing />;
      case 'BasicsWudu':
        return <BasicsWudu />;
      case 'BasicsRakat':
        return <BasicsRakat />;
      case 'BasicsPrayers':
        return <BasicsPrayers />;
      case 'BasicsDua':
        return <BasicsDua />;
      default:
        return null;
    }
  };

  return (
    <div className="basics" id="basics">
      <div className="section">
        <h2 className="section__title">
          Prayer Basics
        </h2>
        <h3 className="section__subhead">
          The section covers the basics of the 5 daily prayers
        </h3>

        <div className="section-categories">
          <ul className="section-categories__list">
            {categories.map((category, index) => {
              return (
                <li key={index} className="section-categories__list-item">
                  <button className={activeButton === category.name ? "section-categories__list-button selected" : "section-categories__list-button"} onClick={handleClick}>{category.name}</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="section-content section-content--wide">
            {renderComponent()}
          <div className="section-media section-media--full-width">
            <img src="../src/images/wudu-image1.jpg" alt="" className="section-media__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basics;
