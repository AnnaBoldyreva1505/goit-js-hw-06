// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//стучусь к элементу, получаю на него ссылку
const list = document.querySelector("#ingredients");

//перебираю массив
ingredients.forEach((element) => {
  // Создаю отдельный элемент <li> при помощи метода document.createElement().
  const addElement = document.createElement("li");
  // console.log(addElement);

  // Добавит элементу класс item.
  addElement.classList.add("item");

  // Добавит название ингредиента как его текстовое содержимое.
  addElement.innerHTML = element;
  // После чего вставит все <li> за одну операцию в список ul#ingredients.
  list.append(addElement);
});
