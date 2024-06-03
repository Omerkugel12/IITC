//3.1
const students = ["Omer", "Jane", "Biden", "Jill"];

//3.2
const startsWithJ = students.find((student) => {
  return student[0] === "J";
});
console.log(startsWithJ);

//3.3
const atLeastOneStartsWithJ = students.some((student) => {
  return student[0] === "J";
});
console.log(atLeastOneStartsWithJ);

//3.4
const everyStartsWithJ = students.every((student) => {
  return student[0] === "J";
});
console.log(everyStartsWithJ);
