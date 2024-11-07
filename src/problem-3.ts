/* 
Problem 3:
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
*/

function countWordOccurrences(sentence: string, word: string): number {
    // Convert both sentence and word to lowercase
    const sentenceInLowerCase = sentence.toLowerCase();
    const wordInLowerCase = word.toLowerCase();

    // Split the sentence into words using a regular expression to remove punctuation
    // const words = sentenceInLowerCase.split(/\W+/);
    const words = sentenceInLowerCase.split(" ");

    // Filter the words that match the word
    const matchingWords = words.filter((w) => w === wordInLowerCase);

    // Return the length of the matching words
    return matchingWords.length;
}

// console.log(countWordOccurrences("TypeScript is great", "typescript")); // Output: 1
// console.log(countWordOccurrences("TypeScript is great. TypeScript is awesome.", "typescript")); // Output: 2

// console.log(countWordOccurrences("TypeScript is great", "great")); // Output: 1








