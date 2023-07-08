function BasicsPrayers() {
  return (
    <div className="section-text js-basics-text" data-category="prayers">
      <h3 className="section-text__title">The 5 prayers</h3>
      <div className="steps">
        <ul className="steps-list">
          <li className="steps-list__item"><button className="steps-list__button js-basics-choice" data-step="Fajr">Fajr</button></li>
          <li className="steps-list__item"><button className="steps-list__button js-basics-choice" data-step="Dhur">Dhur</button></li>
          <li className="steps-list__item"><button className="steps-list__button js-basics-choice" data-step="Asr">Asr</button></li>
          <li className="steps-list__item"><button className="steps-list__button js-basics-choice" data-step="Maghrib">Maghrib</button></li>
          <li className="steps-list__item"><button className="steps-list__button js-basics-choice" data-step="Isha">Isha</button></li>
        </ul>

        <div className="steps__description show">
          <h3 className="steps-description__title js-steps-title">Fajr</h3>
          <ul className="steps-description__body">
            <li className="steps-description__item js-steps show" data-description="Fajr">
              This is the morning prayer, which has <strong>TWO</strong> rakats.
            </li>
            <li className="steps-description__item js-steps" data-description="Dhur">
              This is the afternoon prayer, which has <strong>FOUR</strong> rakats.
            </li>
            <li className="steps-description__item js-steps" data-description="Asr">
              This is the mid-day prayer, which has <strong>FOUR</strong> rakats.
            </li>
            <li className="steps-description__item js-steps" data-description="Maghrib">
              This is the evening prayer, which has <strong>THREE</strong> rakats.
            </li>
            <li className="steps-description__item js-steps" data-description="Isha">
              This is the night prayer, which has <strong>FOUR</strong> rakats.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BasicsPrayers;
