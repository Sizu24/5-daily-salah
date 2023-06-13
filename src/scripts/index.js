console.log('Bismillah');
fixedHeader();
basicsCategories();
basicsFivePrayers();
stepSelection();

function fixedHeader() {
  const header = document.querySelector('.js-header');
  
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.remove('hide');

    clearTimeout(this.countDown);

    if (this.scrollY > 0) {
      this.countDown = setTimeout(function() {
        header.classList.add('hide');
      }, 2000);
    }
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

function stepSelection() {
  const steps = document.querySelectorAll('.js-step');
  const descriptions = document.querySelectorAll('.js-description');

  function removeSelected() {
    steps.forEach((button) => {
      button.classList.remove('selected');
    });
  }

  function showDescription(step) {
    descriptions.forEach((description) => {
      if (description.dataset.description === step.dataset.step) {
        description.classList.add('show');
      } else {
        description.classList.remove('show');
      }
    });
  }

  steps.forEach((step) => {
    step.addEventListener('click', () => {
      removeSelected();
      step.classList.add('selected');

      showDescription(step);
    });
  });
}