
import throttle from 'lodash.throttle';

const FORM__KEY = 'feedback-form-state';
let formData = {};
const refs = {
  inputFormFeedback: document.querySelector('.feedback-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormMessage: document.querySelector('[name="message"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};
populateTextarea();
refs.inputFormFeedback.addEventListener('submit', onFormSubmit);
refs.inputFormFeedback.addEventListener('input', throttle(onInputStorage, 500));

// * convert to string and safe to FORM__KEY
function onInputStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM__KEY, JSON.stringify(formData));
}

// * work with button submit
function onFormSubmit(evt) {
  
  // * 1 add prevent default
console.log(formData);
evt.preventDefault();

// *  check if some input filled if not warning
  const formElements = evt.currentTarget.elements;
  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Все поля ввода должны быть заполнены. Исправьте, пожалуйста.');
  };

// *  clear all fields
  evt.currentTarget.reset();
  localStorage.removeItem(FORM__KEY);
  formData = {};
};

// *  get from local storage and receive variables to names
function populateTextarea() {

  const savedStorageInputs = localStorage.getItem(FORM__KEY)
 
  if (savedStorageInputs) {
    formData = JSON.parse(savedStorageInputs);
    refs.inputFormEmail.value = formData.email || '';
    refs.inputFormMessage.value = formData.message|| '';

}}




