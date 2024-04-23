class Person {
  @watchChanges
  // auto-accessor -> autogenerates getter and setter for our class protype
  accessor project: string = "Simple Project";
}

const person = new Person();
console.log(person.project);
person.project = "More complex project!";

type Accessor<T, V> = {
  get: (this: T) => V;
  set: (this: T, value: V) => void;
};

function watchChanges<T, V>(
  accessor: Accessor<T, V>,
  context: ClassAccessorDecoratorContext
) {
  return {
    get: function (this: T) {
      //   console.log("get: ", this);
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      //   console.log("this", this);
      //   console.log("value", value);
      console.log(
        `The property "${context.name.toString()}" has been set to "${value}"`
      );
      accessor.set.call(this, value);
    },
  };
}
