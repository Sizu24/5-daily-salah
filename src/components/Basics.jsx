import BasicsPreparing from "./Basics/BasicsPreparing";
import BasicsRakat from "./Basics/BasicsRakat";
import BasicsWudu from "./Basics/BasicsWudu";
import BasicsPrayers from "./Basics/BasicsPrayers";
import BasicsDua from "./Basics/BasicsDua";

function Basics() {
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
            <li className="section-categories__list-item">
              <button className="section-categories__list-button js-basics-categories selected" data-category="preparing">Preparing for Salah</button>
            </li>
            <li className="section-categories__list-item">
              <button className="section-categories__list-button js-basics-categories" data-category="wudu">What is Wudu</button>
            </li>
            <li className="section-categories__list-item">
              <button className="section-categories__list-button js-basics-categories" data-category="rakat">What is a Rakat</button>
            </li>
            <li className="section-categories__list-item">
              <button className="section-categories__list-button js-basics-categories" data-category="prayers">The 5 Prayers</button>
            </li>
            <li className="section-categories__list-item">
              <button className="section-categories__list-button js-basics-categories" data-category="dua">What is Dua</button>
            </li>
          </ul>
        </div>

        <div className="section-content">
          <BasicsPreparing />
          <BasicsWudu />
          <BasicsRakat />
          <BasicsPrayers />
          <BasicsDua />
          
          <div className="section-media">
            <img src="../src/images/wudu-image1.jpg" alt="" className="section-media__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basics;
