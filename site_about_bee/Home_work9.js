// 1. Створіть index.html file and index.js file. Підключіть джс до html.

//Зроблено

// 2. Виведіть в консоль body

console.log(document.querySelector('body'));

// 3. Виведіть в консоль довільний eлемент викoристовуючи getElementById

console.log(document.getElementById('contentl'));

// 4. Виведіть в консоль довільний eлемент викoристовуючи getElementsByClassName

console.log(document.getElementsByClassName('active'));
console.log(document.querySelector('.active'));

// 5. Виведіть в консоль довільний eлемент викoристовуючи getElementsByTagName

console.log(document.getElementsByTagName('div')); //видало колекцію всих існуючих дівів.
console.log(document.querySelector('div')); // тут по принципу JS - перший

// 6. Створіть елементи для взяємодії з користувачем (button and input)

//створено инпут з кнопкою пошук

// 7. Напишіть функцію яка буде взяємодіяти з button і буде виводити alert користувачу з довільним текстом 

let button = document.querySelector('#inbutton');

button.addEventListener('click', function() {
	alert('Для пошуку потрібно мати пасіку');
});

/* або якщо створити окрему функцію

let funcforbutton = (arg1) => {
 alert('Для пошуку потрібно мати пасіку')
};

button.addEventListener('click', funcforbutton);
*/

// 8. Напишіть функцію яка буде взяємодіяти з input і буде виводити в консоль значення яке ввів користувач

let inpu = document.querySelector('#in');
button.addEventListener('click', function() {
	console.log(inpu.value);
});
