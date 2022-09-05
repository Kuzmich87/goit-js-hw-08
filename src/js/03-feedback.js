
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const FORM__KEY = 'feedback-form-state';

const formData = {};
dataFromLocalStorage()


function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM__KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FORM__KEY);
  console.log(JSON.parse(localStorage.getItem(FORM__KEY)));
}


function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(FORM__KEY));
    if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
};





