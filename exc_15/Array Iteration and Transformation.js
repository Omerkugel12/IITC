//2.1
const numbers = [1, 2, 3, 4, 5];

//2.2
numbers.forEach((number, index) => {
  console.log(`number: ${number}, index: ${index}`);
});

//2.3
const double = numbers.map((number) => {
  return number * 2;
});

console.log(double);

//2.4
const evens = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evens);

//2.5
const sumNumbers = numbers.reduce((sum, number) => {
  sum += number;
  return sum;
}, 0);
console.log(sumNumbers);
