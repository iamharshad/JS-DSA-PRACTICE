console.clear();
const ary = [-4, -3, 1, 0, 3, 5, 6];

function sumZero(data = []) {
  let i = 0;
  let j = data.length - 1;
  while (i < j) {
    const sum = data[i] + data[j];
    if (sum == 0) {
      return [data[i], data[j]];
    }
    if (sum < 0) {
      i++;
    } else {
      j--;
    }
  }
}

// console.log("sumZero", sumZero(ary));

const ary2 = [1, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6];

function continueUniqueVal(data = []) {
  if (data?.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < data.length; j++) {
    if (data[i] !== data[j]) {
      i++;
      data[i] = data[j];
    }
  }
  return i + 1;
}

// console.log("continueUniqueVal", continueUniqueVal(ary2));
