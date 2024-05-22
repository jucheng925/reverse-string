function reverseString(str) {
  // type your code here
  let reverse = ""
  while (str.length > 0) {
    reverse = reverse + str.slice(-1)
    str = str.slice(0, (str.length -1))
  }
  return reverse
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'ihcmik'");
  console.log("=>", reverseString("kimchi"));

  console.log("");

  console.log("Expecting: 'i'");
  console.log("=>", reverseString("i"));

  console.log("");

  console.log("Expecting: 'he8rt'");
  console.log("=>", reverseString("tr8eh"));

  console.log("");

  console.log("Expecting: '333'");
  console.log("=>", reverseString("333"));

}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// create empty array variable
// loop through and pop the last letter and then add into empty array
