// Create an object person with properties name and age.
//Use the spread operator to create a new object
//called personWithJob that includes
//all properties from person and,
// adds a new property job.

const person = { name: "Omer", age: 23 };
const personWithJob = { ...person, job: "proggramer" };
console.log(personWithJob);
