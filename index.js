const smallestDivisor = (n) => {
  let counter = 2;

  if (n < 1) {
    return NaN
  }

  while (n % counter !== 0) {
    counter = counter + 1;
    
  }
return counter;
  
}

console.log(smallestDivisor(17));