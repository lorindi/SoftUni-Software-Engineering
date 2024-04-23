@withEmployementDatePrototype
@withEmployementDate
@printData
class Manager {
  task: string = "Simple Task";
  project: string = "Simple Project";

  constructor() {
    console.log("Manager class has been initted!");
  }
}

const manager = new Manager();
console.log(manager);
console.log(manager.constructor.prototype);

function withEmployementDatePrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  console.log("3. withEmployementDatePrototype invoked!");
  value.prototype.employmentDate = new Date().toISOString();
}

type Args = { new (...args: any[]): {} };

function withEmployementDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  console.log("2. withEmployementDate invoked!");

  return class extends baseClass {
    employmentDate = new Date().toISOString();

    constructor(...args: any[]) {
      super(...args);

      console.log(
        `Added employementDate property to the ${baseClass.name} class!`
      );
    }
  };
}

function printData(value: Function, context: ClassDecoratorContext) {
  console.log("1. printData invoked!");

  context.addInitializer(() => {
    console.log(`Class with name ${context.name} has been initialized!`);
  });
}
