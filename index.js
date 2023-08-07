// My function will take in a word as an argument and return "true" if it is a palindrome (a word that reads the same both ways) and "false" if it not.


function isPalindrome(word) {
  // Write your algorithm here

  // 1. Pass a string as an argument to the function.
  // 2. Convert the string into an array using the string.split method and assign to a variable "arrayedString".
  // 3. Reverse "ArrayedString" using the string.reverse method and assign to a variable "reversedArrayedString".
  // 4. Convert "reversedArrayedString" back into a string using the array.join method and assign to variable "reversedString".
  // 5. Check if the string argument strictly equals the variable "reversedString" (which is the string but backwards) and return it, expecting a value of "true" if they equal eachother and "false" if they do not.

  const array = word.split("")
  const reversedArray = array.reverse()
  const string = reversedArray.join("")
  return (word === string)
}

/*
  Add your pseudocode here:

My function will take in a word as an argument and return "true" if it is a palindrome (a word that reads the same both ways) and "false" if it not.
I will do this by comparing the word given as an argument and the word in its reversed form and seeing if they strictly equal eachothor.
I will reverse the word by converting it into an array, reversing the array using the built in reverse array method, and then converting that array back into a string.

*/

/*
  Add written explanation of your solution here
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
}

module.exports = isPalindrome;
