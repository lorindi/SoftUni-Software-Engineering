class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Mitko");
console.log(p.name);
