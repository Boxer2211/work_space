
function highAndLow(numbers) {
    
    let arr = [...numbers+''].map(n=>+n);
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j + 1] > arr[j]) {
                    let tmp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = tmp
                }
                
            }
        }
        let num = arr.join('')
    
        return console.log(arr);
        
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")