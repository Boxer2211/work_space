// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

let a = 1 == 2;
console.log(a);

let b = 1 == '1';
console.log(b);

// 2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = 1 != 1;
console.log(a);

b = 1 != 2;
console.log(b);

// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = 1 === '1';
console.log(a);

a = 1 === 1;
console.log(a);

a = '1' === '1';
console.log(a); 

// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = 1 !== 1;
console.log(a);

a = 1 !== '1';
console.log(a);

// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = (1 > 2); 
console.log(a);

a = (3 > 2); 
console.log(a);

// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
a = 1;
b = 5;
console.log(a >= b);
console.log(b >= a);


// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = (2 < 1); 
console.log(a);

a = (1 < 2); 
console.log(a);

// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

console.log(b <= a);
console.log(a <= b);

// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = 1 == 1 && 2 == 1;
console.log(a);

a = 1 == 1 && 1 == 1;
console.log(a);

// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = 1 == 2 || 2 == 1;
console.log(a);

a = 1 == 2 || 1 == 1;
console.log(a);

// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"

a = !a
console.log(a);

a = (!a == !a); 
console.log(a);

// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"

a = 'Java';
b = 'Script';
let c = a + b;
console.log(c);


// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" в іншому "медична"

let color = 'червоний';
let type = (color == 'червоний') ? 'пожежна' : 'медична';
console.log(type);

color = 'івфв';
type = (color == 'червоний') ? 'пожежна' : 'медична';
console.log(type);

// 14) Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"

let obj = {'key1': 1, 'key2': 2, 'key3': 3, 'key4':4};
delete obj.key2;
console.log(obj);

// 15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"

// я спочатку згадав, що ти говорив, що делет використовуеться лише для об'єктів, а для масивів ні. 
// перевірив, дає помилку.

/*let arr = [1, 2, 3, 4, 5];
  delete arr.2;
  console.log(arr);
*/

// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in" визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

//використаю вже існуючий об'єкт
console.log('key1' in obj);
console.log('key2' in obj);

// 16) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

let arr = [1, 2, 3, 4, 5];
console.log(0 in arr);
console.log(5 in arr);

