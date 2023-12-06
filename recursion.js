console.clear();
// factorial

// iterative solutions
function factorialIter(num) {
  let total = 1;
  for (let index = num; index > 1; index--) {
    total *= index;
  }
  return total;
}

// console.log(factorialIter(4));

// recursion

function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialIter(num - 1);
}

// console.log(factorialRecursive(4));
