// ...existing code...

// ex1
interface Employee {
    id: number;
    name: string;
}

const emp: Employee = {
    id: 101,
    name: "ram"
};
console.log(emp);

// =========================

// ex2 - using type alias
type Employee1 = {
    id: number;
    name: string;
};

const emp1: Employee1 = {
    id: 101,
    name: "ram"
};
console.log(emp1);

// ex2 - function types
type Add = (a: number, b: number) => number;
const sum: Add = (a, b) => a + b;
console.log(sum(10, 20));

interface Add1 {
    (a: number, b: number): number;
}
const sum1: Add1 = (a, b) => a + b;
console.log(sum1(10, 20));

// ex3 - array type alias
type Names = string[];
const users: Names = [
    "ram",
    "Thiru",
    "siva"
];
console.log(users);

// ...existing code...
interface Names1 {
    [index: number]: string;
}
const users1: Names1 = [
    "ram",
    "Thiru",
    "siva"
];
console.log(users1);


// primitive types


// declaration merging
interface Student {
    id: number;
}

interface Student {
    name: string;
}

// primitive types
type UserId = number;
let id: UserId = 1001;
console.log(id);

// union type
type Status = "Success" | "Error" | "Loading";
let result1: Status = "Success";
let result2: Status = "Error";
console.log(result1);
console.log(result2);

// declaration merging
interface Student {
    id: number;
}

interface Student {
    name: string;
}

const st11: Student = {
    id: 101,
    name: "Thiru"
};
console.log(st11);