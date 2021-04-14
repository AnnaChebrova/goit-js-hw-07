const categoryEl = document.querySelectorAll('.item');
console.log(`В списке ${categoryEl.length} категории.`);

const animalsTitleEl = document.querySelector('.animal-title');
const animalsEl = document.querySelectorAll('.item-animals');

console.log(`Категория: ${animalsTitleEl.textContent}`);
console.log(`Количество элементов: ${animalsEl.length}`);

const productTitleEl = document.querySelector('.product-title');
const productEl = document.querySelectorAll('.item-product');

console.log(`Категория: ${productTitleEl.textContent}`);
console.log(`Количество элементов: ${productEl.length}`);

const techTitleEl = document.querySelector('.tech-title');
const techEl = document.querySelectorAll('.item-tech');

console.log(`Категория: ${techTitleEl.textContent}`);
console.log(`Количество элементов: ${techEl.length}`);
