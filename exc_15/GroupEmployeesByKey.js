function groupBy(arrOfObjs, key) {
  return arrOfObjs.reduce((group, obj) => {
    const keyValue = obj[key];
    if (!group[keyValue]) {
      group[keyValue] = [];
    }
    group[keyValue].push(obj);
    return group;
  }, {});
}

const employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

console.log(groupBy(employees, "department"));
