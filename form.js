let formSection = document.querySelector('.write-us');
let formWrapper = formSection.querySelector('.wright-us__wrapper');
let form = formWrapper.querySelector('.write-us__form');
let submitButton = form.querySelector('.write-us__button');
let successMessage = formWrapper.querySelector('.success-message');
let formInputs = form.querySelectorAll('.write-us__input');
// submitButton.addEventListener('click', function() {
//    alert('Сообщение отправлено!');
// });
 

form.addEventListener('submit', function() {
   successMessage.classList.remove('hidden');
   setTimeout(function(){
   formSection.style.display = 'none';
   successMessage.classList.add('hidden');
},2000)
   // for(let i = 0; i < formInputs.length; i++){
   //    formInputs[i].value = '';
   // }
   // form.querySelector('.write-us__textarea').value = '';
   emptyInputs();
});

function emptyInputs() {
   for(let i = 0; i < formInputs.length; i++){
      formInputs[i].value = '';
   }
   form.querySelector('.write-us__textarea').value = '';
};

document.addEventListener('keydown', function(evt) {
   if(evt.keyCode === 27) {
      formSection.style.display = 'none';
      emptyInputs();
   }
});



// function formClose() {
//    formSection.style.display = 'none';
//    successMessage.classList.add('hidden');
// };
