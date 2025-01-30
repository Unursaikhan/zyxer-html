// function isEven(a) {
//   if (a % 5 === 0) {
//     return "5d huvaagdana";
//   } else {
//     return "5d huvaagdahgui";
//   }
// }
// const res = isEven(5);
// console.log(res);
// function isEven(a) {
//   if (a < 100) {
//     return "INCLUDE";
//   } else {
//     return "EXCLUDE";
//   }
// }
// const res = isEven(50);
// console.log(res);
// function add(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else if (c > a && c > b) {
//     return c;
//   }
// }
// const res = add(5, 7, 9);
// // console.log(res);
// function isEven(a) {
//   if (a >= 1896 && a % 4 === 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// const res = isEven(2020);
// console.log(res);
// function isEven(a) {
//   if (a >= 80 && a <= 100) {
//     return "A";
//   } else if (a >= 70 && a <= 79) {
//     return "B";
//   } else if (a >= 60 && a <= 69) {
//     return "C";
//   } else if (a >= 50 && a <= 59) {
//     return "D";
//   } else if (a >= 0 && a <= 49) {
//     return "F";
//   } else {
//     return "dungiin hemjuur bish baina";
//   }
// }
// const res = isEven(70);
// console.log(res);
// function isEven(a) {
//   if (a >= 9 && a <= 11) {
//     return "Autmn";
//   } else if (a >= 6 && a <= 8) {
//     return "Summer";
//   } else if (a >= 3 && a <= 5) {
//     return "Fall";
//   } else if (a > 12) {
//     return "sar bish bain";
//   } else {
//     return "Winter";
//   }
// }
// const res = isEven(12);
// console.log(res);
// function isEven(a) {
//   if (a >= 6 && a <= 12) {
//     return "good morning";
//   } else if (a > 12 && a <= 17) {
//     return "good afternoon";
//   } else if (a > 24) {
//     return "its not a time!";
//   } else {
//     return "good evening";
//   }
// }
// const res = isEven(30);
// console.log(res);
// function isEven(a, b) {
//   if (a >= 30 && b === "sunny") {
//     return "hot day";
//   } else if (a < 30 && a >= 20 && b === "sunny") {
//     return "warm day";
//   } else if (a < 20 && b === "sunny") {
//     return "bit cold day";
//   } else if (b === "rainy") {
//     return "Don't forget your umbrella!";
//   }
// }
// const res = isEven(10, "sunny");
// // console.log(res);
// let sum = 0,
//   num = 300;
// function findsum(num) {
//   for (let i = 0; i < num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // console.log(findsum(5));
// function isPrime(num) {
//   if (num <= 2) {
//     console.log("anhnii too bish");
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       console.log("anhnii too bish");
//     }
//   }
//   console.log(num);
//   function checkPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   }
//   for (let i = 2; i <= num; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// // isPrime(13);
// function isPrime(num) {
//   for (let i = 2; i <= num; i++) {
//     let isPrime = true;
//     for (let loop = 2; loop < i; loop++) {
//       if (i % loop === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) console.log(i);
//   }
// }
// isPrime(40);
// const arr = [0, 20, 71, "gay", false];
// arr.push(2);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr);
// let sum = 0;
// function sumOfEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
// }
// sumOfEven([2, 45, 31, 44, 67, 12]);
// console.log(sum);
// let sum = 0;
// function sumOfEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
// }
// sumOfEven([2, 45, 31, 44, 67, 12]);
// console.log(sum);
// let sum = 0;
// function sumOfEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
// }
// sumOfEven([2, 45, 31, -44, 67, 12]);
// console.log(sum);
// const arr = [10, 5, 8, 15, 10];

// let lowest = arr[0];
// let index = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > lowest) {
//     lowest = arr[i];
//     index = i;
//   }
// }
// console.log(index);
// const numbers = [10, 5, 8, 2, 15];

// let lowest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < lowest) {
//     lowest = numbers[i];
//   }
// }

// // console.log(lowest);
// const arr = [10, 5, 8, 2, 15];

// let reversedArray = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArray.push(arr[i]);
// }
// console.log(reversedArray);

// const arr = [40, 30, 41, 17, 42, 41, 11, 34, 22, 33, 24, 50];
// if (arr[0] > arr[1]) {
//   console.log(arr[0]);
// }

// for (i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//     console.log(arr[i]);
//   }
// }

// if (arr[arr.length - 1] > arr[arr.length - 2]) {
//   console.log(arr[arr.length - 1]);
// }
// function Pair(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       arr2.push([arr[i], arr[j]]);
//     }
//   }
//   return arr2;
// }
// const arr = [10, 5, 8, 2, 15, 9];
// const res = Pair(arr);
// console.log(res);

// function equalToArr(arr, target) {
//   for (i = 0; i < arr.length; i++) {
//     for (j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         arr2.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return arr2;
// }
// const arr2 = [];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const target = 10;
// console.log(equalToArr(arr, target));
// function intercept(arr, arr2) {
//   let interception = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr[i] === arr2[j]) {
//         interception.push([arr[i], arr2[j]]);
//       }
//     }
//   }
//   return interception;
// }
// const arr = [10, 9, 3, 5, 7, 13];
// const arr2 = [9, 0, 41, 13, 5, 6, 8];
// console.log(intercept(arr, arr2));
// function findNegative(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// const arr = [10, -3, 6, 9, -10, 31, -5];

// console.log(findNegative(arr));
// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] > 1) {
//       return arr[i] + 1;
//     }
//   }
//   return "daraallsn bn";
// }

// const arr = [1, 2, 7, 8, 3, 4, 6];
// console.log(findMissingNumber(arr));
// function findMissingNumber(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   for (let i = min; i < min + arr.length; i++) {
//     let found = false;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         found = true;
//       }
//     }

//     if (found === false) {
//       return i;
//     }
//   }

//   return "daraallsn bn";
// }

// const arr = [9, 5, 8, 3, 4, 6];
// console.log(findMissingNumber(arr));
// function position(arr, b) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == b) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(position([4, -3, 5, -8], 5));
// function oneCycle(arr) {
//   let arr2 = [];
//   arr2.push(arr[arr.length - 1]);
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr2.push(arr[i]);
//   }
//   return arr2;
// }
// const arr2 = [];
// const arr = [1, 2, 3, 4, 5];
// console.log(oneCycle(arr, arr2));
// function grow(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// const arr = [1, 2, 3, 4, 5, 6, 1];
// console.log(grow(arr));
// function divideByFive(arr) {
//   let b = 0;
//   const arr2 = [];
//   const dividedByFive = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 38) {
//       if (arr[i] % 5 < 3) {
//         arr2.push(arr[i]);
//       } else {
//         arr2.push(arr[i] + (5 - (arr[i] % 5)));
//       }
//     }
//     if (arr[i] < 38) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// const arr = [55, 78, 31, 45, 92, 93, 97, 88, 73, 75, 64, 60];
// console.log(divideByFive(arr));
// function removeDuplicate(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// console.log(removeDuplicate([1, 2, 3, 4, 4, 5]));
// function checkIfTriangle(arr) {
//   if (arr.length == 3) {
//     arr > 0;
//     if (arr[0] > 0 && arr[1] > 0 && arr[2] > 0) {
//       if (
//         arr[0] < arr[1] + arr[2] &&
//         arr[1] < arr[0] + arr[2] &&
//         arr[2] < arr[0] + arr[1]
//       ) {
//         const p = arr[0] / 2 + arr[1] / 2 + arr[2] / 2;
//         const area = Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]));
//         return "true", area;
//       } else {
//         return "not triangle";
//       }
//     } else {
//       return "not triangle";
//     }
//   } else {
//     return "not triangle";
//   }
// }
// console.log(checkIfTriangle([3, 4, 5]));
// function operator(a) {
//   const b = a % 1000000;
//   const c = a - b;
//   const d = c / 1000000;
//   if (d > 97 && d < 100) {
//     return "mobicom";
//   }
//   if (d > 91) {
//     return "skytel";
//   }
//   if (d > 80) {
//     return "unitel";
//   }
// }
// console.log(operator(99117354));
// function circle(r) {
//   const area = r * r * 3.14;
//   return area;
// }
// console.log(circle(2));
// function sumOfDigit(a) {
//   let sum = 0;
//   for (let i = 1; a > 0; i *= 10) {
//     let d = a % 10;
//     sum += d;
//     a = (a - d) / 10;
//   }
//   return sum;
// }
// console.log(sumOfDigit(980235));
// function checkIfPalindrom(a) {
//   const arr = [];
//   for (let i = 1; a > 0; i *= 10) {
//     let d = a % 10;
//     arr.push(d);
//     a = (a - d) / 10;
//   }
//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(checkIfPalindrom(12321));

// function fibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(30));
// console.log(findSmallestNumber([1, 3, 4, 6, 7, 4, 1, 10, 23], 4, 10));
// function findSmallestNumber(arr, i, j) {
//   let smallest = arr[i];

//   for (let k = i; k < j; k++) {
//     if (arr[k] < smallest) {
//       smallest = arr[k];
//     }
//   }

//   return smallest;
// }

// console.log(findSmallestNumber([1, 3, 4, 6, 7, 4, 10, 10, 23], 4, 10));
// function sort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let arr = [4, 3, 6, 65, 8, 7, 90, 10, 5];
// console.log(sort(arr));
// reverseString = (string) => {
//   let arr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     arr += string[i];
//   }
//   return arr;
// };
// console.log(reverseString("abcdef"));
// deleteTheFirstCharacterFromJSString = (str) => {
//   const str2 = str.replace(str[0], "");
//   return str2;
// };
// console.log(deleteTheFirstCharacterFromJSString("abcdef"));
// RemoveTextFromAStringInJS = (str) => {
//   const str2 = str.replace("handsome ", "");
//   return str2;
// };
// console.log(RemoveTextFromAStringInJS("Hi my name is handsome Unursaikhan"));
// const IterateOverStringCharactersInJS = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// };
// console.log(IterateOverStringCharactersInJS("abcdef"));
// const SortaStringInJS = (str) => {
//   const str2 = str.split("").sort().join("");
//   return str2;
// };
// console.log(SortaStringInJS("aaibishdallr"));
// const CheckIfStringHasOnlyAlphabetsInJS = (str) => {
//   let str2 = true;
//   for (i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     if (!(char >= 65 && char <= 90) && char >= 97 && char <= 122) {
//       str2 = false;
//     }
//   }
//   return str2;
// };
// console.log(CheckIfStringHasOnlyAlphabetsInJS("abcdefghijk123a"));
// const CapitalizeTheFirstLetterInJS = (str) => {
//   const str2 = str.replace(str[0], "W");
//   return str2;
// };
// console.log(CapitalizeTheFirstLetterInJS("whore"));
const ConvertCommaSeparatedStringToArrayInJS = (str) => {};
