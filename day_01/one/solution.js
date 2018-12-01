const { getInput } = require("../../utils");

const input = getInput()
  .split("")
  .map(Number);

const result = input
  .filter(
    (element, index, array) => element === array[(index + 1) % array.length]
  )
  .reduce((accumulator, value) => accumulator + value);

console.log(result);
