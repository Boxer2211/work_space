// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let a = 1;
let b = String(a);
console.log(typeof b);

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let aa = 0;
let bb = Boolean(aa);
console.log(typeof bb, bb);

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let aaa = 22;
let bbb = (a = null); // вимушений так зробити, бо писало в консолі браузера, що Null not defined. 
console.log(typeof bbb, bbb); // І далі так робив, а не через функцію.

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ilon = '22';
let numilon = Number(ilon);
console.log(typeof numilon, numilon);

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let str = 'i am batman';
let boolstr = Boolean(str);
console.log(typeof boolstr, boolstr);

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let wot = 'Allisov';
let nulwot = (wot = null);
console.log(typeof nulwot, nulwot);

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball = true;
let strball = String(ball);
console.log(typeof strball, strball);

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball1 = false;
let strball1 = Number(ball1);
console.log(typeof strball1, strball1);

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball2 = true;
let strball2 = (ball2 = null);
console.log(typeof strball2, strball2);

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test = null;
let strtest = String(test);
console.log(typeof strtest, strtest);

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test1 = null;
let strtest1 = Number(test1);
console.log(typeof strtest1, strtest1);

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test2 = null;
let strtest2 = Boolean(test2);
console.log(typeof strtest2, strtest2);

// 13) Напишіть всі способи створення функції.

let fun = function (){};
function funy () {}; // з тих що мені відомі, без підглядок 

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

function func() {
	console.log('');
}

func(); 

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

function func1() {
	return 'Batman';
}
console.log(func1());


// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function one(arg1) {
	console.log(arg1);
	return arg1;
}
console.log(one(55));


// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function one1(num1, num2) {
	console.log(num1, num2);
	return num1 + num2;
}
console.log(one1(5,7));

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function one2(nume1, nume2, nume3) {
	console.log(nume1, nume2, nume3);
	return nume1 + nume2 + nume3;
}
console.log(one2(5,7,8));


function one3(numer1, numer2, numer3) {
	console.log(numer1, numer2, numer3);
	return numer1 + numer2 + numer3;
}
let asdasd = 4;
let br = 'kg';
console.log(one3(aaa,asdasd,br));

function func15(name = 'Аноним', age) {
	alert('ваше имя: ' + String(name) + ' вік ' + age);
}
func15('dd',13);