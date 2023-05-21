<?php 

  $path = './images/';
  $files = scandir($path);
  if (!empty($files)) {
    $filtered = array_diff($files, array('.', '..'));
  }

  $images = [];
  foreach ($filtered as $imageName) {
    array_push($images, $gallery . $imageName);
  }

?>

<div class="wudu" id="#wudu">
  <h2 class="section__title">Making Wudu</h2>
  <h3 class="section__subhead">
    The first steps to prepare for prayer.
  </h3>
  <div class="section-content">
    <div class="section">
      <div class="steps">
        <ul class="steps__list">
          <li class="steps__list-item"><button selected>Intention</button></li>
          <li class="steps__list-item"><button>Hands</button></li>
          <li class="steps__list-item"><button>Mouth</button></li>
          <li class="steps__list-item"><button>Nose</button></li>
          <li class="steps__list-item"><button>Face</button></li>
          <li class="steps__list-item"><button>Arms</button></li>
          <li class="steps__list-item"><button>Hair</button></li>
          <li class="steps__list-item"><button>Ears</button></li>
          <li class="steps__list-item"><button>Feet</button></li>
        </ul>

        <div class="steps__description">
          <h3 class="steps__description-title">Washing Hands</h3>
          <ol class="steps__description-body">
            <li>
              Wash your right hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
            <li>
              Wash your left hand up to your wrist 3 times, while saying “Allahu-Akbar” each time.
            </li>
          </ol>
         </div>
      </div>
    </div>

    <div class="section">
      <div class="section-media">
        <img src="./images/wudu-image1.jpg" alt="" class="section-media__image">
      </div>
    </div>
  </div>
</div>