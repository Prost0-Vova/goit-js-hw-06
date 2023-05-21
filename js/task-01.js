const categoriesList = document.querySelector("ul#categories");
const listItemsEls = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${listItemsEls.length}`);
listItemsEls.forEach((item) => {
  const title = item.querySelector("h2").textContent;

  const listItems = item.querySelectorAll("li");

  console.log(`Category: ${title}`);
  console.log(`Elements: ${listItems.length}`);
});
