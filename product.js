// Image Gallery Functionality
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.gallery__thumb');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    // Update main image
    const newImage = thumb.dataset.image;
    mainImage.src = newImage;

    // Update active state
    thumbnails.forEach((t) => t.classList.remove('gallery__thumb--active'));
    thumb.classList.add('gallery__thumb--active');
  });
});

// Quantity Selector
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increaseQty');
const decreaseBtn = document.getElementById('decreaseQty');

if (increaseBtn && decreaseBtn && quantityInput) {
  increaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    if (currentValue < maxValue) {
      quantityInput.value = currentValue + 1;
    }
  });

  decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    if (currentValue > minValue) {
      quantityInput.value = currentValue - 1;
    }
  });
}

// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove('tab-btn--active'));
    tabContents.forEach((content) =>
      content.classList.remove('tab-content--active'),
    );

    // Add active class to clicked button and corresponding content
    button.classList.add('tab-btn--active');
    document
      .querySelector(`.tab-content[data-tab="${targetTab}"]`)
      .classList.add('tab-content--active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
