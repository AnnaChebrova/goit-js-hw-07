const nameInput = document.querySelector('#validation-input');

nameInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (Number(nameInput.dataset.length) === event.target.value.length) {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        console.log('+');
    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        console.log('-');
    }
}