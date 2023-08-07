// My function will take in a word as an argument and return "true" if it is a palindrome (a word that reads the same both ways) and "false" if it not.


function isPalindrome(word) {
  // Write your algorithm here

  // 1. Pass a string as an argument to the function.
  // 2. Using the else if conditionals, check if the word is an empty string. If it is, return false.
  // 3. Then, check if the word is a string. If it is, then on the word, add three build in js methods one after the other: string.split, array.reverse, and array.join.
  // 4. Check if the string argument strictly equals the variable "reversedWord" (which is the string but backwards) and return it, expecting a value of "true" if they equal eachother and "false" if they do not.
  // 6. If the word is not a string, then return false.

  if (word === "") {
    return false
  } else if (typeof word === "string") {
    const reversedWord = word.split("").reverse().join("")
    return word === reversedWord
  } else {
    return false
  }
}

/*
  Add your pseudocode here:

My function will take in a word as an argument and return "true" if it is a palindrome (a word that reads the same both ways) and "false" if it not.
I will do this by comparing the word given as an argument and the word in its reversed form and seeing if they strictly equal eachothor.

*/

/*
  Add written explanation of your solution here

  In order to evaluate if the argument is a palindrome or not, I had the argument compared with its value reversed. I also made sure my code handles edge cases such as empty strings and numbers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chaya"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("otto"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome(66733));
}

module.exports = isPalindrome;
