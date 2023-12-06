console.clear();
const array = [3, 4, 5, 2, 1, 6, 7, 8];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//-------------------|-------------()|-------------------------

//index = 5
function linearSearch(data = [], item) {
  if (!data?.length) return;
  for (let index = 0; index < data.length; index++) {
    if (data[index] === item) return index + 1;
  }
  return -1;
}

// console.log(linearSearch(array, 3), "linearSearch");

function binarySearch(data = [], item) {
  if (!data?.length) return;
  let start = 0;
  let end = data.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (data[middle] !== item && start <= end) {
    if (item > data[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
  }

  console.log(start, middle, end, "--");

  if (data[middle] === item) {
    return middle + 1;
  } else {
    return -1;
  }
}

console.log(binarySearch(sortedArray, 6));
