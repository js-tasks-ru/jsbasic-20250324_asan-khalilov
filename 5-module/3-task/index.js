function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const btnRight = document.querySelector('.carousel__arrow_right');
  const btnLeft = document.querySelector('.carousel__arrow_left');

  let currentSlide = 0;
  const totalSlides = 4;
  const slideWidth = carouselInner.offsetWidth;

  btnLeft.style.display = 'none';

  btnRight.addEventListener('click', () => {
    currentSlide++;
    spinCarousel();
  })

  btnLeft.addEventListener('click', () => {
    currentSlide--;
    spinCarousel();
  })


  function spinCarousel() {
    carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    btnRight.style.display = (currentSlide < totalSlides - 1) ? '' : 'none';
    btnLeft.style.display = (currentSlide !== 0) ? '' : 'none';
  }
}
