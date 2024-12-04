var backgrounds = document.querySelectorAll('.background');
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

let imageIndex = 0;

function updateSlider() {
    
  // Reset all classes

  images.forEach((image) => {
    image.classList.remove('active', 'previous', 'next', 'inactive');
  });


  // Set active, previous, next, and inactive classes

  const previousIndex = (imageIndex - 1 + images.length) % images.length;
  const nextIndex = (imageIndex + 1) % images.length;

  images[imageIndex].classList.add('active');
  images[previousIndex].classList.add('previous');
  images[nextIndex].classList.add('next');

  images.forEach((image, index) => {
    if (index !== imageIndex && index !== previousIndex && index !== nextIndex) {
      image.classList.add('inactive');
    }
  });

  // Update backgrounds

  backgrounds.forEach((background) => {
    background.style.opacity = 0;
  });
  backgrounds[imageIndex].style.opacity = 1;

  // Increment index

  imageIndex = (imageIndex + 1) % images.length;
}

// Initialize slider and set interval

updateSlider();
setInterval(updateSlider, 3000); 