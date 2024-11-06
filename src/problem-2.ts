/* 
Problem 2:
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])[

// Sample Output:
  (1, 2, 3, 4, 5)
];
*/

function removeDuplicates(arrOfNumbers: number[]): number[] {
    // new Set from the array to remove duplicates
    const setOfNumbers = new Set(arrOfNumbers);

    // Convertinf Set back to an array
    return Array.from(setOfNumbers);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

