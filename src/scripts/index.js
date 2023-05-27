fixedHeader();
basicsCategories();
basicsFivePrayers();

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