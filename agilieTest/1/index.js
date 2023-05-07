import express  from 'express'
import fs from 'fs'
const PORT = 5000

const app = express()
app.use(express.json())

// function for first task
function Find(a, b) {
  return (a+1 == b) || (a*2 == b) ? this.result = "Possibl" : this.result = "Unpossibl"
 }

// Main function
const mainFunc = () => {
  
  const inData = fs.readFileSync("in.json", {
    encoding: "utf8"
  });
  const json = JSON.parse(String(inData)); // get input parametrs
  
  // call first func
  const firstResult = new Find(json.first.player1, json.first.player2)
  
  // do the second
  const arr = json.second
  const duplicates2 = []
 
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates2.includes(arr[i])) {
        duplicates2.push(arr[i]);
      }
    }
  }
 
  // do the third
  const array = json.third.blin
  const record = (json.third.record + 1)/2
  
  const obj = {"result":[]}

  function findCombinations(sum, startIndex, currentCombination) {
    if (sum === record) {
      return obj.result.push(currentCombination)
    }
    for (let i = startIndex; i < array.length; i++) {
      const num = array[i];
      const newSum = sum + num;
      if (newSum <= record) {
        findCombinations(newSum, i + 1, [...currentCombination, num]);
      }
    }
  }
  
  findCombinations(0,0,[])


 // write to JSON
 const string =  JSON.stringify(new Find(json.first.player1, json.first.player2))
 const second =  JSON.stringify({repeatNum:duplicates2})
 const third = JSON.stringify({nextRecord: record * 2, ...obj})
  
 // write output parametrs
 // fs.writeFileSync("outFirst.json", string); 
//   fs.writeFileSync("outSecond.json", second)
//  fs.writeFileSync("outThird.json", third)
  

}


const start = () => {
  try {
      app.listen(PORT, () => console.log('server started on port', PORT))
      mainFunc()
  } catch (error) {
      console.log(error);
  }
}

start()




// (() => {

//   const fs = require("fs");

//   // читаешь содержимое из файла
//   const content = fs.readFileSync(__dirname + "/source.json", {
//       encoding: "utf8"
//   });

//   // преобразовываешь в объект
//   const json = JSON.parse(String(content));

//   // производишь манипуляции
//   const dist = {
//       id: json.id,
//       name: json.name,
//       admin: json.admin
//   };

//   // преобразоываешь в строку
//   const string =  JSON.stringify(dist)

//   // записываешь в результирующий файл
//   fs.writeFileSync(__dirname + "/dist.json", string);

// })();