const smallestDivisor = (num) => {
let counter = 1;
let result = 1;

  if (num < 1) {
    return NaN
  }
  
  while (num % counter !== 0) {
    result = num / counter;
    counter = counter + 1;
    
    
    console.log(result);
    console.log(counter);
  }
  
  return result;
}

console.log(smallestDivisor(15));