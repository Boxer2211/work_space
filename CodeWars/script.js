//- 1 -------------------------------------------------------------------
const intPlayer1 = "2"
const intPlayer2 = "4"

function find(a, b) {
 return (a+1 == b) || (a*2 == b) ? "Possibl" : "Unpossibl"
}

find(intPlayer1, intPlayer2)

//- 2 -------------------------------------------------------------------

// 1 
const arr = [1,2,3,4,5,6,7,5,8,9,10,11,12,14,13,14]
const duplicates = arr.filter((number, index, numbers) => {
return numbers.indexOf(number) !== index;
});


// 2

const duplicates2 = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates2.includes(arr[i])) {
      duplicates2.push(arr[i]);
    }
  }
}
console.log(duplicates2);

//- 3.1 -------------------------------------------------------------------

const array = [0.5, 1, 2.5, 5, 10, 15, 20, 25];
let record = 101 
record = (record + 1)/2

function findCombinations(sum, startIndex, currentCombination) {
  if (sum === record) {
    console.log(currentCombination);
    return;
  }

  for (let i = startIndex; i < array.length; i++) {
    const num = array[i];
    const newSum = sum + num;
    if (newSum <= record) {
      findCombinations(newSum, i + 1, [...currentCombination, num]);
    }
  }
}
arr.sort((a, b) => b - a); 
findCombinations(0, 0, []);

//- 3.2 -------------------------------------------------------------------