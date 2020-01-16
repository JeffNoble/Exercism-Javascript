
export const reverseString = (word) => {
  let arr = word.split("")
  let newWord = arr.reduce(function (accumlator, currentValue) {
    return currentValue + accumlator;
  }, "")
  return newWord
};


// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
