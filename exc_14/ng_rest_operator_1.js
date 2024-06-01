//Create a function sumAll
//that takes any number of arguments and
// returns their sum.
//Use the rest operator to gather the arguments into an array.

function sumAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3));
