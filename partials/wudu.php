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

<div class="wudu" id="wudu">
  <div class="section">
  <h2 class="section__title section__title--dark">Making Wudu</h2>
  <h3 class="section__subhead section__subhead--dark">
    The first steps to prepare for prayer.
  </h3>
  <div class="section-content">
    <div class="wudu-text">
      <div class="steps js-steps-list">
        <ul class="steps-list">
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step selected" data-step="intention">Intention</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="hands">Hands</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="mouth">Mouth</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="nose">Nose</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="face">Face</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="arms">Arms</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="hair">Hair</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="ears">Ears</button></li>
          <li class="steps-list__item steps-list__item--dark"><button class="steps-list__button js-step" data-step="feet">Feet</button></li>
        </ul>

        <div class="steps-description js-description show" data-description="intention">
          <h3 class="steps-description__title steps-description__title--dark">Intention</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Begin by intending to perform Wudu solely for the purpose of purification and preparation for prayer.
            </li>
            <li class="steps-description__item">
              Say "Bismillah" (In the name of Allah) to seek the blessings of Allah before starting the Wudu.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="hands">
          <h3 class="steps-description__title steps-description__title--dark">Washing Hands</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Starting by washing your right hand up to the wrist three times, ensuring that water reaches between the fingers.
              Say “Allahu-Akbar” each time.
            </li>
            <li class="steps-description__item">
              Do the same for your left hand.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="mouth">
          <h3 class="steps-description__title steps-description__title--dark">Rinsing Mouth</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Take a handful of water in your right hand and rinse your mouth, ensuring that water reaches all areas. 
              Do this three times.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="nose">
          <h3 class="steps-description__title steps-description__title--dark">Cleaning Nose</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Using your right hand, sniff water into your nostrils and then expel it out with the left hand.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="face">
          <h3 class="steps-description__title steps-description__title--dark">Washing Face</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Wash the entire face three times, from the hairline to the chin and from ear to ear, ensuring water reaches all areas.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="arms">
          <h3 class="steps-description__title steps-description__title--dark">Washing Arms</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Begin with the right arm, washing it from the fingertips up to the elbow three times.
            </li>
            <li class="steps-description__item">
              Repeat the same for the left arm.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="hair">
          <h3 class="steps-description__title steps-description__title--dark">Washing Hair</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Using your wet hands, wipe the entire head once, moving them from the forehead
              to the back of the head and then back to the forehead.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="ears">
          <h3 class="steps-description__title steps-description__title--dark">Cleaning Ears</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Then take your thumb and fingers, and run them through the grooves of your ears, making sure to clean behind them too.
            </li>
          </ol>
        </div>
        <div class="steps-description js-description" data-description="feet">
          <h3 class="steps-description__title steps-description__title--dark">Washing Feet</h3>
          <ol class="steps-description__body steps-description__body--dark">
            <li class="steps-description__item">
              Start with the right foot, washing it up to the ankles three times,
              ensuring water reaches all areas.
            </li>
            <li class="steps-description__item">
              Repeat the same for the left foot.
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