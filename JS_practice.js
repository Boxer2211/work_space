// зразок тернарнарного (замість if)
let age = 22;
let sta = (age >= 18) ? 'tak' : 'ni';
console.log (sta);


// зразки стрелочних функцій
let aaa = (elem) => {
	 return(elem % 2 === 0) ? true : false; 
}
console.log (aaa(3));

let ab = (num1, num2) => num1 + num2;
console.log (ab(3,4));

// зразок switch case
let sd1 = confirm('Маєшь автомобіль?');
switch (sd1) {
    case true:
    console.log(1);    
        break;

    default:
        break;
}
console.log(sd1);


// зразок коол-беку
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); //викликаємо функцию-коллбэк
	}
	
	return result;
}

let result1 = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});

console.log(result1); 