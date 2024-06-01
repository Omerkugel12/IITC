//Create an object person with properties name, age, and city.
//Use object destructuring to assign these properties to variables name, age, and city.

const person = { name: "Omer", age: 23, city: "Holon" };
const { name, age, city } = person;
console.log(`name: ${name}, age: ${age}, city: ${city}`);
