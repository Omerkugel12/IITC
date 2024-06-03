function arrayToObject(arr, key) {
  const res = arr.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
  console.log(res);
}

const inventory = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];
arrayToObject(inventory, "id");

// function arrayToObject(arr, key) {
//   return arr.reduce((acc, obj) => {
//     acc[obj[key]] = obj;
//     return acc;
//   }, {});
// }

// const inventory = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 800 },
// ];

// console.log(arrayToObject(inventory, "id"));
