

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

let arr5 = [1, 2, 
                ['man', 'woman', 
                    ['cat', 'dog'], ['bird', 'fox',
                        ['book', 'pen'], {j1: 'jan', j2: 'janka'}
                    ]
                ]
            ];                                   

                       
                    
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
 
// коли в багатовимірний масив вклав обєкт, то почало видавати помилку, що ітерація не можлива. Рішення цій помилці не знайшов.