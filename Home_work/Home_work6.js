// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.

let arr = [1, 2, 3, 4, 5];
    console.log(arr);
for(let elem of arr) {
    console.log(elem)
}

// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let obj = {k1: 1, k2: 2, k3: 3};
    console.log(obj);
for(let elem in obj) {
    console.log(elem, '=', obj[elem]);
}


// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let arr1 = [1, 2, 3, 4, 5];
arr1.pop();                 // тут сначал затупив, бо пілся РОР не поставив дужки, а потім розібрався.
console.log(arr1.length);

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let arr2 = [1, 2, 3, 4, 5];
arr2.push(6);                
console.log(arr2, arr2.length);

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву

let arr3 = [1, 2, 3, 4, 5];
arr3.shift();                
console.log(arr3, arr3.length);

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let arr4 = [1, 2, 3, 4, 5];
arr4.unshift(0);                
console.log(arr4, arr4.length);

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

let arr5 = [1, 2, 
                ['man', 'woman', 
                    ['cat', 'dog'], ['bird', 'fox',
                        ['book', 'pen']
                    ]
                ]
            ];                                   

// let arr5 = [1, 2, ['man', 'woman', ['cat', 'dog'], ['bird', 'fox', ['book', 'pen']]]];
                    
function allElementsArr(arg1) {
    for(elem of arg1){
        if(typeof elem == 'object') {
            allElementsArr(elem);
        }
        else {
            console.log(elem); 
        }    
    }
};

allElementsArr(arr5);


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

let obj11 = {key1: 1, key2: 2, key3: {
                                        1: 'name',
                                        2: 'second name',
                                        3: 'age'  
                                    }, 
                                        key4: {
                                            login: true,    
                                            password: true, 
                                            submit: {
                                                 y: 'yes',
                                                 n: 'no'   
                                                    }
                                             } 
            }
console.log(obj11);

let allKeyObj = (arg2) => {
    for(let elem in arg2) {
        //console.log(elem, arg2[elem]);
        //console.log(typeof arg2[elem]);
        
       if(typeof arg2[elem] == 'object'){ // тут помилково написав =='objekt' и думаю, чого ничого не работає. Ледве знайшов в чому помилка))
            console.log(elem);            
            allKeyObj(arg2[elem]);
        }
        else {
            console.log(elem);
        }
    }    
}

allKeyObj(obj11);

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.

let arr6 = [30,
                [55, 56], 
                [22, '33', 
                    ['road', 'way', arr1, arr2                            
                    ] 
                ], 
                [true, false],
                'hand', 'head'
            ]
console.log(arr6);
allElementsArr(arr6);

// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let obj12 = {k1: 'sdCD', k2: 'asvzv', k3: {
                                            asp: 1,
                                            asp1: 2
                                           }, 
                                                k4: ['awd','awd','awdd']
                                        }
console.log(obj12);


   let n = (num) => {                                 //довелось модернізувати функцію
    for(let elem in num) {
      
        if(typeof num[elem] == 'object'){ 
            console.log(elem, '=', num[elem]);       // або можна закоментити цей консол лог, тоді видасть лише примітиви значення ключів
            n(num[elem]);
        }
        else {
            console.log(elem, '=', num[elem]);
        }
    }    
}
n(obj12);
