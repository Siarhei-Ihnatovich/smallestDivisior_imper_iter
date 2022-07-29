const smallestDivisor = (n) => {
  let div = 1;
  

  if (n < 1) {
    return NaN
  }

  while (n % div > 0) {
    div = div + 1;
    console.log(div);
  }

  
}

console.log(smallestDivisor(15));