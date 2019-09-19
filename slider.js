
let slides = document.querySelectorAll('.slide');
let sliderControls = document.querySelectorAll('.slider__radio');
let activeClass = 'slider__slide_active';
let activeIndex = 0;
//нужно для того чтобы первый слайдер был активным при загрузке страницы
slides[activeIndex].classList.add(activeClass);

for(let i = 0; i < slides.length; i++) {
   //навешивает обработчик на каждую радиокнопку
   sliderControls[i].addEventListener('change', function() {
      slides[i].classList.add(activeClass);
      slides[activeIndex].classList.remove(activeClass);
      activeIndex = i;
   });
};
