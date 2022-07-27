const smallestDivisor = (n) => {
let counter = 1;
let result = 1;

  if (n < 1) {
    return NaN
  }
  
  
  while (n % counter > 0) {
   result = n / counter;
    counter = counter + 1;
    
    
    console.log(result);
    console.log(counter);
  }
  
  return result;
}

console.log(smallestDivisor(4));