const { getInput } = require("../../utils");

const input = getInput()
  .split("")
  .map(Number);

const result = input
  .filter(
    (element, index, array) =>
      element === array[(index + array.length / 2) % array.length]
  )
  .reduce((accumulator, value) => accumulator + value);

console.log(result);
