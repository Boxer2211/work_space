function circleSlash(n) {
    function todo2 (arr){
            for(i = 0; i < arr.length; i++){
                arr.splice(i+1,1)
              }
             
              return arr.length > 1 ? todo2(arr) : arr[0]
            }
            
    function todo1 (arr){ 
            for(i = 0; i < arr.length; i++){
                arr.splice(i+1,1)
              }
              console.log(arr);
              if(arr.length > 1){
                arr.shift()  
                return todo1(arr);
              } else {
                  return arr[0]
              } 
        }
    let result = [];
    if (n === 1){
      return 1;
    } else {
      for (let i = 1; i <= n; i++){
        result.push(i)
      }
      return result[result.length-1] % 2 === 0 ? todo2(result) : todo1(result)
    }
  }

  console.log(circleSlash(83))

  
  