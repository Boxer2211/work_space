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