const nameInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

nameInput.addEventListener('change', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}
