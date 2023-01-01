
function isSquare(n) {

    let a = Math.sqrt(n);
    if (Number.isInteger(a)) {
        return console.log(true); 
    } else {
        return console.log(false);        
    }
        
}

isSquare(16)