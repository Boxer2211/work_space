function shiftedDiff(first,second){
    first = first.split('')
    second = second.split('')
    for (let i = 0; i < first.length; i++){
      if (first.includes(second[i])){
        return -1
    }
    console.log(first)
  }
  