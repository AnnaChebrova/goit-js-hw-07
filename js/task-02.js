const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients')
const ingredientsList = ingredients.map(option => {

const ingredientsItem = document.createElement('li');
ingredientsItem.classList.add('list-item');
ingredientsItem.innerHTML = option;

return ingredientsItem;
});

console.log(ingredientsList);

ingredientsContainer.append(...ingredientsList);
