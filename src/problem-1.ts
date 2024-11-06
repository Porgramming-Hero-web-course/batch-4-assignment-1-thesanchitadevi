/* 
Problem 1:
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
*/

function sumArray(arrOfNumbers: number[]): number {
  return arrOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is the initial value of the accumulator
}   

// console.log(sumArray([1, 2, 3, 4, 5])); // 15


