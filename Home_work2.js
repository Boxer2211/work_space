// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let a = 1;
a = String(a);
console.log(typeof a, a);

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let aa = 0;
aa = Boolean(aa);
console.log(typeof aa, aa);

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let aaa = 22;
aaa = (aaa = null);           // вимушений так зробити, бо писало в консолі браузера, що Null not defined. 
console.log(typeof aaa, aaa); // І далі так робив

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ilon = '22';
ilon = Number(ilon);
console.log(typeof ilon, ilon);

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let str = 'i am batman';
str = Boolean(str);
console.log(typeof str, str);

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let wot = 'Allisov';
wot = (wot = null);
console.log(typeof wot, wot);

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball = true;
ball = String(ball);
console.log(typeof ball, ball);

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball1 = false;
ball1 = Number(ball1);
console.log(typeof ball1, ball1);

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let ball2 = true;
ball2 = (ball2 = null);
console.log(typeof ball2, ball2);

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test = null;
test = String(test);
console.log(typeof test, test);

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test1 = null;
test1 = Number(test1);
console.log(typeof test1, test1);

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let test2 = null;
test2 = Boolean(test2);
console.log(typeof test2, test2);

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
	
	return arg1;
}
let artem = 20;
console.log(one(55), one(artem));


// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function one1(num1, num2) {
		return num1 + num2;
}
let andr = 3;
let nik = 4;
console.log(one1(5,7), one1(andr,nik));

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

function one2(nume1, nume2, nume3) {
	
	return nume1 + nume2 + nume3;
}
let st = 1;
let pt = 2;
let lt = 3;
console.log(one2(5,7,8), one2(st,pt,lt));


function one3(numer1, numer2, numer3) {
	console.log(numer1, numer2, numer3);
	return numer1 + numer2 + numer3;
}
let asdasd = 4;
let br = 'kg';
console.log(one3(aaa,asdasd,br));

function func15(name = 'Аноним', age) {
	console.log('ваше имя: ' + String(name) + ' вік ' + age);
}
func15('dd',13);

