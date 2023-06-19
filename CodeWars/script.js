const array = [1, 2, 3, [4, 5], null, 6, 'name', { one: 'one' }];

/** Don't use `for` and `while` loops */
const sumAllNumbersInArray = (value, sum = 0) => {
 return sum = value.reduce((accum, val) => {
    if(Array.isArray(val)){
      return accum + (val.reduce((a, v) => a + v ))
     } else if (typeof val === 'number'){
      return accum + val
     } else {
      return accum
     }
      
  }, 0);

  // console.log(sum);
};

console.info(sumAllNumbersInArray(array)); // 21 ( i.e. 1 + 2 + 3 + 4 + 5 + 6 )


