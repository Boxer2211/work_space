// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let a = 1; //  var a = 1;
const b = 1;

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// коментар в один рядок
/* коментар
в 
чотири 
рядки */

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let arr1 = arr.splice(1, 3); 
console.log(arr1);


// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let obj = {'key1': 1, 'key2': 2, 'key3': 3, 'key4': 4, 'key5': 5};
console.log(obj);

delete obj.key1;
delete obj.key5;
console.log(obj);


// 5) Напишіть всі способи створення функції.

let fun = function () {};

function fun1() {}

//там ще є через стрілочки, але я то знаю лише з підручника, на память не памятаю
() => {}

// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function fun2(num1, num2, num3) {
    return num1 + num2 + num3;
};

let c = 3;

console.log(fun2(1,2,3), fun2(a,b,c));

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"

let workType = 'fulltime';
let salary = (workType == 'fulltime') ? 1000 : 500; 
console.log(salary);

workType = 'no full';
salary = (workType == 'fulltime') ? 1000 : 500;
console.log(salary);


// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let pr = prompt('коли на картоплю?')
console.log(pr);

switch (pr) {
    case 'сьогодні':
        console.log('a'); 
        break;
    case 'завтра':
        console.log('b'); 
        break;
    default:
        console.log('c'); 
        break;
}
if (pr == 'сьогодні') {
    console.log('a'); 
} else if (pr == 'завтра'){
    console.log('b'); 
}
else {
    console.log('c'); 
}


let aa = (num1, num2) =>  num1 + num2  ;
console.log(aa(2,3));

