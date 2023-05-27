fixedHeader();
basicsCategories();
basicsFivePrayers();
wuduSteps();

function fixedHeader() {
  const header = document.querySelector('.js-header');
  let countDown = null;
  
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.remove('hide');
    clearTimeout(countDown);

    countDown = setTimeout(function() {
      header.classList.add('hide');
    }, 1500);
  });

  header.addEventListener('mouseover', () => {
    header.classList.remove('hide');
  });
}

function basicsCategories() {
  const categories = document.querySelectorAll('.js-basics-categories');
  const basicsText = document.querySelectorAll('.js-basics-text');
  if (!categories) return;

  function removeSelected() {
    categories.forEach((selected) => {
      selected.classList.remove('selected');
    });
  }

  function showCategoryText(category) {
    basicsText.forEach((text) => {
      if (text.dataset.category === category.dataset.category) {
        text.classList.add('show');
      } else {
        text.classList.remove('show');
      }
    });
  }

  categories.forEach((category) => {
    category.addEventListener('click', () => {
      removeSelected();
      category.classList.add('selected');

      showCategoryText(category);
    });
  });
}

function basicsFivePrayers() {
  const basicsChoiceButton = document.querySelectorAll('.js-basics-choice');
  const stepsTitle = document.querySelector('.js-steps-title');
  if (!basicsChoiceButton) return;

  basicsChoiceButton.forEach((button) => {
    const prayerName = button.textContent; 
    const description = document.querySelectorAll('.js-steps');
    button.addEventListener('click', () => {
      stepsTitle.textContent = prayerName;

      description.forEach((step) => {
        if (step.dataset.prayer === stepsTitle.textContent) {
          step.classList.add('show');
        } else {
          step.classList.remove('show');
        }
      });
    });
  });
}

function wuduSteps() {
  const stepsButtons = document.querySelectorAll('.js-wudu-steps');
  const wuduDescription = document.querySelectorAll('.js-wudu-description');

  function removeSelected() {
    stepsButtons.forEach((button) => {
      button.classList.remove('selected');
    });
  }

  function showDescription(step) {
    wuduDescription.forEach((description) => {
      if (description.dataset.category === step.dataset.category) {
        description.classList.add('show');
      } else {
        description.classList.remove('show');
      }
    });
  }

  stepsButtons.forEach((step) => {
    step.addEventListener('click', () => {
      removeSelected();
      step.classList.add('selected');

      showDescription(step);
    });
  });
}