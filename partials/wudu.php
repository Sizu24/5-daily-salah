<?php 

  $path = './images/';
  $files = scandir($path);
  if (!empty($files)) {
    $filtered = array_diff($files, array('.', '..'));
  }

  $images = [];
  foreach ($filtered as $imageName) {
    array_push($images, $path . $imageName);
  }

?>

<div class="wudu" id="#wudu">
  <div class="section">
  <h2 class="section__title section__title--dark">Making Wudu</h2>
  <h3 class="section__subhead section__subhead--dark">
    The first steps to prepare for prayer.
  </h3>
  <div class="section-content">
    <div class="wudu-text">
      <div class="steps">
        <ul class="steps-list">
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step selected" data-step="intention">Intention</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="hands">Hands</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="mouth">Mouth</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="nose">Nose</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="face">Face</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="arms">Arms</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="hair">Hair</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="ears">Ears</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-wudu-step" data-step="feet">Feet</button></li>
        </ul>

        <div class="steps-description js-wudu-description" data-description="intention">
          <h3 class="steps-description__title">Intention</h3>
          <ol class="steps-description__body">
            <li>
              Begin by intending to perform Wudu solely for the purpose of purification and preparation for prayer.
            </li>
            <li>
              Say "Bismillah" (In the name of Allah) to seek the blessings of Allah before starting the Wudu.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description show" data-description="hands">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item show">
              Starting by washing your right hand up to the wrist three times, ensuring that water reaches between the fingers.
              Say “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Do the same for your left hand.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="mouth">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="nose">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="face">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="arms">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="hair">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="ears">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>
        <div class="steps-description js-wudu-description" data-description="feet">
          <h3 class="steps-description__title">Washing Hands</h3>
          <ol class="steps-description__body">
            <li class="steps-description__item">
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
        </div>

      </div>
    </div>
    <div class="section-media">
      <img src="./images/wudu-image1.png" alt="" class="section-media__image">
    </div>
  </div>
  </div>
</div>