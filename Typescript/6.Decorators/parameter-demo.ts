class Animal {
  @validateParams
  eat(arg1?: string, arg2?: number) {
    console.log(`Received params: ${arg1}, ${arg2}`);
  }
}

// Decorator's scope
function validateParams<T>(
  target: Function,
  context: ClassMethodDecoratorContext<T>
) {
  // Function's scope
  return function (...args: any) {
    for (let i = 0; i < args.length; i++) {
      const currentArg = args[i];

      if (currentArg === undefined || currentArg === null) {
        throw new Error(
          `Parameter at index ${i} is invalid! Parameter: ${currentArg}`
        );
      }
    }

    if (args.length < 2) {
      throw new Error(`Parameters must be 2!`);
    }

    target.apply(this, args);
  };
}

const animal = new Animal();
animal.eat("Veggie", 123); // ['Veggie']
