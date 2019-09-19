let formSection = document.querySelector('.write-us');
let formWrapper = document.querySelector('.wright-us__wrapper');
let form = document.querySelector('.write-us__form');
let submitButton = form.querySelector('.write-us__button');
let successMessage = formWrapper.querySelector('.success-message');
// submitButton.addEventListener('click', function() {
//    alert('Сообщение отправлено!');
// });

form.addEventListener('submit', function() {
   successMessage.classList.remove('hidden');
   alert('Сообщение отправлено!');
   formSection.style.display = 'none';
});