const nameInput = document.querySelector('#validation-input');
const dataLength = +nameInput.dataset.length;
nameInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLenght = event.target.value.length;
    if(dataLength === inputLenght) {
    nameInput.classList.add('valid');
nameInput.classList.remove('invalid');
        console.log('+');
    } else {
                nameInput.classList.add('invalid');
nameInput.classList.remove('valid');
        console.log('-');
    }
}
