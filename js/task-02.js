// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const productEl = document.createElement(`li`);
  productEl.classList.add(`item`);
  productEl.textContent = el;
  console.log(productEl);
  return productEl;
});
ingredientsEl.append(...createItemEl);
