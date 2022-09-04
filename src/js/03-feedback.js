import throtle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

formRef.addEventListener('input', throtle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};