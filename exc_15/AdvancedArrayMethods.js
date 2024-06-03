//5.1
const products = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "watch", price: 200 },
];

//5.2
const names = products.map((product) => {
  return product.name;
});
console.log(names);

//5.3
const moreThan500 = products.filter((product) => {
  return product.price > 500;
});
console.log(moreThan500);

//5.4
const sumPrices = products.reduce((sum, product) => {
  sum += product.price;
  return sum;
}, 0);
console.log(sumPrices);
