

function Salah() {
  return (
    <div className="salah" id="salah">
      <div className="section">
        <h2 className="section__title">Salah (Prayer)</h2>
        <h3 className="section__subhead">
          This is the prayer step-by-step. Follow from top to bottom.
        </h3>
        <div className="section-content">
          <div className="salah-text">
            <div className="steps js-steps-list">
              <ul className="steps-list">
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="preparing">Preparing</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="intention">Intention</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="takbir">Takbir (standing)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="qiyam">Qiyam (standing)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="al-fatiha">Al Fatiha (standing)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="ruku">Ruku (bowing)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="stand">Stand</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="sujud">Sujud (prostration)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="quood">Quood (sitting)</button></li>
                <li className="steps-list__item"><button className="steps-list__button js-step" data-step="sujud">Sujud (prostration)</button></li>
              </ul>

              <div className="steps-description js-description show" data-description="preparing">
                <h3 className="steps-description__title">Preparing</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Find a clean area, and face the direction of the Qibla. Check out <a href="#basics-preparing" className="steps-description__link">Preparing for Salah</a> for details on how to make sure you're ready.
                  </li>
                </ol>
              </div>

              <div className="steps-description js-description" data-description="intention">
                <h3 className="steps-description__title">Intention</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Raise your hands up to your ears (women up to their shoulders), and make your intention for which prayer you'll pray, and how many rakats.
                  </li>
                </ol>
              </div>

              <div className="steps-description js-description" data-description="takbir">
                <h3 className="steps-description__title">Takbir</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Now bring your hands down to under your chest or around your belly and say <strong>"Allahu Akbar"</strong>;
                  </li>
                </ol>
              </div>

              <div className="steps-description js-description" data-description="qiyam">
                <h3 className="steps-description__title">Qiyam</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Place your right hand over your left hand below the navel, or on the chest. Women on their chest.
                  </li>
                  <li className="steps-description__item">
                    Recite the following:
                  </li>
                  <li className="steps-description__item">
                    <strong>"Subhanaka allahumma, wa bi hamdika, wa tabara kasmuka, wa ta ala jadduka, wa la ilaha ghairuka"</strong>
                  </li>
                  <li className="steps-description__item">
                    <strong>"A udhu billahi minash shaitanir rajim"</strong>
                  </li>
                </ol>
              </div>

              <div className="steps-description js-description" data-description="al-fatiha">
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

              <div className="steps-description js-description" data-description="ruku">
                <h3 className="steps-description__title">Ruku</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                  Bow down while saying  <strong>"Allahu Abkar" </strong>. Place your hands on your knees and say:
                  </li>
                  <li className="steps-description__item">
                  <strong>"Subhana Rabbiyal Azim"</strong> (three times)
                  </li>
                </ol>
              </div>
              <div className="steps-description js-description" data-description="stand">
                <h3 className="steps-description__title">Stand</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Stand up from the bowing position while saying:
                  </li>
                  <li className="steps-description__item">
                  <strong>"Sami Allahu Liman Hamidah. Rabbana Lakal Hamd"</strong>
                  </li>
                </ol>
              </div>
              <div className="steps-description js-description" data-description="sujud">
                <h3 className="steps-description__title">Sujud</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                    Prostrate on the floor while saying <strong>"Allahu Akbar"</strong>. Make sure to have your forehead, nose, both palms and knees touching the floor and say:
                </li>
                  <li className="steps-description__item">
                    <strong>"Subhana Rabbiyal Ala"</strong> (three times) 
                  </li>
                </ol>
              </div>
              <div className="steps-description js-description" data-description="quood">
                <h3 className="steps-description__title">Quood</h3>
                <ol className="steps-description__body">
                  <li className="steps-description__item">
                      While saying "Allahu Akbar", sit upright, with your knees bent, and put your palms on your knees. 
                </li>
                  <li className="steps-description__item">
                      Here you can say the du'a <strong>"Rabbighfirli, wa arhamani, wahdini, wa afini, warquqni"</strong>.
                </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="section-media">
            <img src="../src/images/wudu-image1.png" alt="" className="section-media__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salah;
