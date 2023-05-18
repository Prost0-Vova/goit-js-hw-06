const ingredientsList = document.querySelector('ul#ingredients');


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((ingredient) => {
  const listElement = document.createElement('li');
  listElement.classList.add('ingredient');
  listElement.textContent = ingredient;
  listElement.classList.add('item')
  ingredientsList.appendChild(listElement);
});


