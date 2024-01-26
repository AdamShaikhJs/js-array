let arrDup = [1, 2, 3, -4, 1, 2];

//1. Sort Array using forLoop----------------- Time Complixity = O(n²),
const sortArray = (arr) => {
  if (arr.length < 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
console.log('sort for loop --->', sortArray(arrDup)); //["a", "a", "b", "c"]

//using while loop----------------- Time Complixity = O(n), Two pointer method
function sortWhile(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    i++;
    j--;
  }
  return arr;
}
console.log('sort While loop --->', sortWhile(arrDup));

//using for loop ----------------- Time Complixity = O(n²),
const sortArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; //[arr[i],arr[j]]=[arr[j],arr[i]]
      }
    }
  }
  return arr;
};
console.log('sort using temp---->', sortArr(arrDup));

//sort array inbuilt method ---------------------------------
const sortArrayInbuilt = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log('Using sort method-->', sortArrayInbuilt(arrDup));

//***********************************************************************/
//2. find max number in the array
const findMax = (arr) => {
  return Math.max(...arr);
  // return Math.max.apply(null, arr);
};
console.log('findMax max method--->', findMax(arrDup));

// find higest number using for loop---------------------------
const findMaxFor = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
console.log('findMax for loop- --->', findMaxFor(arrDup));

//***********************************************************************/
//3 find Dublicate number in array
const findDuplicate = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};
console.log('removeDuplicat using forloop--->', findDuplicate(arrDup));

//  useing new Set------------------------
const findDuplicateSet = (arr) => {
  return Array.from(new Set(arr));
  // return [...new Set(arr)];
};
console.log('removeDuplicat using newSet--->', findDuplicateSet(arrDup));

// find Dublicate using the reduce-------------------------------
function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
console.log('removeDuplicat using reduce--->', removeDuplicates(arrDup));

//******************************************************************************/
//4 find sum of array
const findSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log('sum using forloop--->', findSum(arrDup));

//using reduce method
const findSumReduce = (arr) => {
  return arr.reduce((acc, val) => acc + val);
};
console.log('sum using reduce--->', findSumReduce(arrDup));

//******************************************************************************/
//5 find Even and odd number in array
const evenArr = (arr) => {
  return arr.filter((val, i) => val % 2 === 0);
};
console.log('even arr filter---> ', evenArr(arrDup));

//use forLoop in array-----------------------------------------
const evenForLoop = (arr) => {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
};
console.log('odd arr forLoop---> ', evenForLoop(arrDup));

//******************************************************************************/
//6 Check if pair with given Sum exists in Array (Two Sum)
// Two nested loops: Time = O(n²), Space = O(1)
//arr = {0, -1, 2, -3, 1}, x= -2
const checkSum = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        console.log(arr[i], arr[j]);
        return true;
      }
    }
  }
  return false;
};
console.log('checkSum arr forLoop---> ', checkSum([0, -1, 2, -3, 1], 3));

function sumOfTwo(array, sumNumber) {
  for (i of array) {
    for (j of array) {
      if (i + j === sumNumber) {
        console.log([i, j]);
      }
    }
  }
}
sumOfTwo([1, 2, 3], 4);

function sumWhile(arr, su) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === su) {
      return true;
    }
    i++;
    j--;
  }
  return false;
}
console.log('sum using while loop --->', sumWhile([1, 2, 3], 3));
