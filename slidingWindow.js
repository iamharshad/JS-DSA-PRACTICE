console.clear();

const array = [1, 2, 3, 4, 5, 6, 8, 9, 1];

function maxSubArraySum(data = [], range) {
  let sum = -Infinity;
  for (let index = 0; index < data.length - range + 1; index++) {
    let temp = 0;
    for (let j = 0; j < range; j++) {
      const element = data[index + j];
      temp += element;
    }
    if (temp > sum) {
      sum = temp;
    }
  }

  return sum;
}

// console.log(maxSubArraySum(array, 3));

function maxSubArraySumSlideWindow(data = [], range) {
  let maxSum = 0;
  let tempSum = 0;

  for (let index = 0; index < range; index++) {
    console.log(array[index], "fl");
    const element = array[index];
    tempSum += element;
  }

  for (let index = range; index < data.length; index++) {
    console.log(array[index], "2ndloop");
    const element = array[index];
    tempSum = tempSum - data[index - range] + data[index];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubArraySumSlideWindow(array, 3));
