Array.prototype.containsAll = function(a) {
    
  1

  } 


  console.log([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([3,4,5,1,2])) // true
  console.log([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([9,2,5,4,10])), //true );
  console.log([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15])),// false );
   console.log([1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([])),// true );
   console.log([].containsAll([12,15])),// false );
   console.log([].containsAll([])) //true );
