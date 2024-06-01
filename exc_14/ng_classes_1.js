// "create an html file with script tag.
// create a Person class with properties name , age , height , a constructor
// and  a function write that format the properties nicely and write to the console.
// use the constructor to create two students and invoke the write function on each"

export class Person1 {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  write = () => {
    return `name:${this.name},age:${this.age},height:${this.height}`;
  };
}

let omer = new Person1("Omer", 23, 176);
omer.write();

export class Person2 {
  name = "";
  age = 0;
  height = 0;
  write = () => {
    return `name: ${this.name},age: ${this.age},height: ${this.height}`;
  };
}

let nadav = new Person2();
nadav.name = "Nadav";
nadav.age = 29;
nadav.height = 180;
nadav.write();
