// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях

let obj = {};
let arr = [];

// 2. Додайте до обєкту ключ "birthdate" типу Date

obj.birthdate = new Date('1994-05-04');

// 3. Додайте новий елемент в кінець масиву

arr.push(1);

// 4. Видаліть з обєкту доданий ключ у завданні 3

delete obj.birthdate;

// 5. Видаліть елемент з масиву доданий у завданні 4

arr.shift();

// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.

obj.name = 'Alex';
obj.secondname = 'Moralex';

function objname(arg1, arg2) {
    let objname1 = {};
    objname1.name = arg1;
    objname1.secondname = arg2;
    
    return objname1.name + ' ' + objname1.secondname;
}

console.log(objname(obj.name, obj.secondname));


// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті

function Construktor(arg1, arg2) {
    this.name1 = arg1;
    this.secondname = arg2;
    this.showname = () => this.name1 + this.secondname;
}

let obj1 = new Construktor(obj.name, obj.secondname);
console.log(obj1.name1 + ' ' + obj1.secondname);

// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.

obj.birthdate = new Date('1994-05-04');

function Construktor1(arg1, arg2, arg3) {
    Construktor.call(this, arg1, arg2);     
    this.birthday = arg3;
    this.getbirsday = () => this.birthday;
       
}

let obj2 = new Construktor1(obj.name, obj.secondname, obj.birthdate);
console.log(obj2.name1, obj2.secondname, obj2.birthday);

// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.

let newobject = new Construktor1('Shahid', 'Antanat', '04/05/1995');
console.log(newobject.name1, newobject.birthday);
