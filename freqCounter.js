console.clear();
const arrayOne = [2, 3, 4];
const arrayTwo = [4, 16, 9];

// BigO(n2)
function findSqrOn2(arrOne, arrTwo = []) {
  if (arrOne?.length !== arrTwo?.length) return false;
  for (let index = 0; index < arrOne.length; index++) {
    // n
    const el = arrOne[index];
    const elSqr = el * el;
    const findEle = arrTwo.indexOf(elSqr); // n inline loop
    if (findEle === -1) return false;
    arrTwo.splice(index, 1);
  }
  return true;
}

// console.log("-----------------", findSqrOn2(arrayOne, arrayTwo), "BigO(n2)");

function findSqrO2n(arrOne = [], arrTwo = []) {
  if (arrOne?.length !== arrTwo?.length) return false;
  const arrOneObj = {};
  const arrTwoObj = {};

  arrOne.forEach((element) => {
    if (arrOneObj[element]) {
      arrOneObj[element] = arrOneObj[element] + 1;
    } else {
      arrOneObj[element] = 1;
    }
  });
  arrTwo.forEach((element) => {
    if (arrTwoObj[element]) {
      arrTwoObj[element] = arrTwoObj[element] + 1;
    } else {
      arrTwoObj[element] = 1;
    }
  });

  for (const elementInObj in arrOneObj) {
    if (!(elementInObj ** 2 in arrTwoObj)) {
      return false;
    }
    if (arrOneObj[elementInObj] !== arrTwoObj[elementInObj ** 2]) {
      return false;
    }
  }
  return true;
}

const newArrayOne = [2, 2, 4];
const newArrayThree = [4, 25, 16];

// console.log(
//   "-----------------",
//   findSqrO2n(newArrayOne, newArrayThree),
//   "BigO(n)",
// );
