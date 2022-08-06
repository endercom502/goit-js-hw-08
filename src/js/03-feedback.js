import { throttle } from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(event => {
    const formInput = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.clear();
});
const storage = localStorage.getItem('feedback-form-state');
const parseStorage = JSON.parse(storage);
const fillForm = () => {
  if (parseStorage !== null) {
    input.value = parseStorage.email;
    textArea.value = parseStorage.message;
  }
};
console.log(fillForm());
