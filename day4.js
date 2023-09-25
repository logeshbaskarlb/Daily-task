/*
Do the below programs in anonymous function & IIFE
1)Print odd numbers in an array
2)Convert all the strings to title caps in a string array
3)Sum of all numbers in an array
4)Return all the prime numbers in an array
5)Return all the palindromes in an array
6)Return median of two sorted arrays of the same size.
7)Remove duplicates from an array
8)Rotate an array by k times
*/
//1)Print odd numbers in an array

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = function () {
  let odd = arr.filter((num) => num % 2 == 1);
  console.log(odd);
};
odd();

//2)Convert all the strings to title caps in a string array

let str = function () {
  let arr = "hello there how are you";
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
  console.log(titlecase);
};
str();

//3)Sum of all numbers in an array

let func = function () {
  let ar = [1, 2, 3, 4, 5];
  let sum = ar.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
};
func();

//4)Return all the prime numbers in an array

let prime = function (arr) {
  return arr.filter(function (n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([7, 16, 9, 3]));

//5)Return all the palindromes in an array

let isPalindrome = function () {
  var myArray = ["viicc", "racecar", "honda", "malayalam"];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split("").reverse().join("");
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
};
isPalindrome();

//6)Return median of two sorted arrays of the same size.

let median = function (a, b) {
  let c = [...a, ...b].sort((a, b) => a - b);

  const half = (c.length / 2) | 0;

  if (c.length % 2) {
    return c[half];
  } else {
    return (c[half] + c[half - 1]) / 2;
  }
};
let arr1 = [1, 12, 15, 26, 38, 24];
let arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

//7)Remove duplicates from an array

let findDuplicates = function () {
  const yourArray = [1, 1, 2, 3, 4, 5, 5];
  let duplicates = [];
  const tempArray = [...yourArray].sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i]);
    }
  }
  console.log(duplicates);
};
findDuplicates();

//8)Rotate an array by k times

function RightRotate(a, n, k) {
  // If rotation is greater
  // than size of array
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      // Printing rightmost
      // kth elements
      document.write(a[n + i - k] + " ");
    } else {
      document.write(a[i - k] + " ");
    }
  }
  document.write("<br>");
}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 5;

RightRotate(Array, N, K);
