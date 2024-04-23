class Project {
  budget: number = 900;

  @withBudget(10)
  writeTest() {
    console.log("Tests are important!");
  }

  @withBudget(300)
  fixBugInProduction() {
    console.log("Fixing bugs in production is expensive!");
  }
}

const project = new Project();
project.writeTest();
project.fixBugInProduction();
project.fixBugInProduction();
project.writeTest();
project.fixBugInProduction();
console.log(project.budget);

type WithBudget = {
  budget: number;
};

// DECORATOR's scope
function withBudget<T extends WithBudget>(actionBudget: number) {
  // Connect between CLASS and FUNCTION
  return function (target: Function, context: ClassMethodDecoratorContext) {
    // FUNCTION's scope => fixBugInProduction/writeTest
    return function (...args: any) {
      const instance = this as T; // T -> our decorate class

      if (instance.budget > actionBudget) {
        instance.budget -= actionBudget;
        target.apply(instance, args); // calls our method
      } else {
        console.log(
          `Insufficient funds for ${context.name.toString()} operation. Required: ${actionBudget}!`
        );
      }
    };
  };
}
