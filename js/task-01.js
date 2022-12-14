// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку 
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoryEl = document.querySelector("#categories");
const elementsOfCategoryEl = categoryEl.children;
console.log(`Number of categories: ${elementsOfCategoryEl.length}`);

for (const el of elementsOfCategoryEl) {
    const titleEl = el.children;
    const textOftitleEl = titleEl[0].textContent;
    const liEl = titleEl[1].children.length;
    console.log(`Category:` , textOftitleEl);
    console.log(`Elements:` , liEl);
}