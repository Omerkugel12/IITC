import { Person1 } from "./ng_classes_1.js";

class Employee extends Person1 {
  jobDescription = "";
  jobPosition = "";
  writeEmployee = () => {
    return `name: ${this.name}, age: ${this.age}, height: ${this.height}, jobDescription: ${this.jobDescription}, jobPosition: ${this.jobPosition}`;
  };
}

let manager = new Employee("Omer", 25, 197);
manager.jobDescription = "manger";
manager.jobPosition = "senior";
console.log(manager.writeEmployee());
