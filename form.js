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
   setTimeout(function(){
   formSection.style.display = 'none';
   successMessage.classList.add('hidden');
},1000)
});

// function formClose() {
//    formSection.style.display = 'none';
//    successMessage.classList.add('hidden');
// };
