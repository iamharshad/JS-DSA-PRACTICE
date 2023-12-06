console.clear();
const array = [6, 7, 8, 9, 0, 1];

function swap(data, indexOne, indexTwo) {
  return ([data[indexOne], data[indexTwo]] = [data[indexTwo], data[indexOne]]);
}

function bubbleSort(data = []) {
  for (let index = data.length - 1; index > 0; index--) {
    for (let j = 0; j < index; j++) {
      console.log(data[index], data[j]);
      if (data[j] > data[j + 1]) {
        swap(data, j, j + 1);
      }
    }
  }
  return data;
}

console.log(bubbleSort(array));
