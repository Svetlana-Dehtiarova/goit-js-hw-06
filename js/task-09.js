// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на
//button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector(`body`);
const btnChangeColor = document.querySelector(`.change-color`);
const spanColor = document.querySelector(`.color`);

btnChangeColor.addEventListener(`click`, onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColor.textContent = color;
}
