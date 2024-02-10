// Деклариране на масив с числа
let numbers: number[] = [1, 2, 3, 4, 5];

// Деклариране на масив със стрингове
let fruits: string[] = ["apple", "banana", "orange"];

// Деклариране на обект
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};

// Деклариране на други примитивни типове данни
let isActive: boolean = true;
let count: number = 10;
let message: string = "Hello, TypeScript!";
let someNullValue: null = null;
let someUndefinedValue: undefined = undefined;

// Деклариране на обект с динамично добавяне на полета
let dynamicObject: any = {};
dynamicObject.name = "Alice";
dynamicObject.age = 25;

// Деклариране на масив с различни типове данни (tuple)
let tupleExample: [string, number] = ["hello", 10];

// Функция, която връща числов резултат
function add(a: number, b: number): number {
    return a + b;
}

// Извикване на функцията и принтиране на резултата
console.log(add(5, 3)); // Извежда: 8
