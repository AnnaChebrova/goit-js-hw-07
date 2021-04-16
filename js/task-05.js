const nameInput = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

const defaultGreeting = greeting.textContent;

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    greeting.textContent = event.currentTarget.value;

    if(!nameInput.value) {
        greeting.textContent = defaultGreeting;
    }
};
