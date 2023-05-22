const ingredientsList = document.querySelector('ul#ingredients');


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liItem = ingredients.map((ingredient) => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = ingredient;
  return listElement;
});

ingredientsList.append(...liItem);