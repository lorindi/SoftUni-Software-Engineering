type Level = "low" | "mediun" | "hard";

interface Task {
  name: string;
  level: Level;
}

class Employee {
  @withTask({ name: "Task - 1", level: "mediun" })
  tasks: Task[] = [];

  @withComplicatedTask()
  extraTasks: Task[] = [];
}
const employee = new Employee();
console.log(employee);

// Decorator's scope
function withTask(inputTask: Task) {
  // Filed's scp[e]
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
  ) {
    return function (fieldValue: V) {
      fieldValue.push(inputTask);
      return fieldValue;
    };
  };
}

function withComplicatedTask() {
  // logic
  // based on input -> different decorators can be returned
  return withTask({ name: "Task - 0", level: "hard" });
}
