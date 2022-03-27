
// 1. Створіть функцію за допомогою "function expression".

let a = function(num1) {
    console.log(num1);
}

a(414);

// 2. Створіть функцію за допомогою "new Function".

let ab = new Function('num1', 'num2', 'return num1 + num2'); 

console.log(ab(1, 2));

// 3. Створіть функцію за допомогою "arrow function".

let fun = (n1, n2, n3) => {
       return n1 + n2 + n3
}

console.log(fun(1, 1, 2));

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.

let func = (objec, cb) => {
    let obj = [];
    for(let elem of objec) {  
        obj.push(cb(elem));
    }
    console.log(obj);    
}


let someCallBAck = (num1) => {
    return num1 ** 2;
}

let arre = [1, 2, 3];    
let object1 = {k1: 1, k2: 2, k3: 3}

func(arre, someCallBAck); // з масивом працює добре   
//func(object1, someCallBAck); // якщо прописую об"єкт то не дає провести ітарацію в циклі.

let func1 = (objec, cb) => {
    let obj = [];
    for(let elem in objec) {  
        obj.push(cb(objec[elem])); // це піздец... вчора цілий день сидів над цим прикладом і сьогодні з ранку згадав, що в об"єкт потрібно прописувать obj[elem].
    }
    console.log(obj);    
}

func1(object1, someCallBAck);


// 5. Створіть рекурсивну функцію.

let rekyrsivfunc = (num1) => {
    for(let elem of num1){
        if (typeof elem == 'object') {
            rekyrsivfunc(elem); 
        } else {
            console.log(elem);
        }
    }
}
let arr2 = [1, 2, [
                    3, 4, [
                            5, 6]
                  ]
            ]

rekyrsivfunc(arr2);    

// 6. Створіть самовикликаючусь функцію.

/*let result1 = () => {  //чомусь через стрілку не вдалось зробити самовикликаючу  
	console.log('@');
}();*/

let result = function() {    
	console.log('@');
}();

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.

let funcWithShowArguments = function() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

funcWithShowArguments('a', 1, true, '123');