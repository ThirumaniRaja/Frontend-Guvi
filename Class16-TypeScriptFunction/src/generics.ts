// ...existing code...

// generics allow us to create reusable components (functions, classes, interfaces, types)
// that can work with different data types while maintaining type safety

// non-generic version (uses any) - not type safe
function getValueAny(value: any): any {
    return value;
}

let numAny = getValueAny(100);
let nameAny = getValueAny("venkat");
let statusAny = getValueAny(true);

// numAny.toUpperCase(); // this would compile (because of any) but fail at runtime

console.log(numAny);
console.log(nameAny);
console.log(statusAny);

// generic version - type safe
function getValue<T>(value: T): T {
    return value;
}

// pass the number
let num = getValue<number>(100);

// pass the string
let name = getValue<string>("venkat");

// pass the boolean
let status = getValue<boolean>(true);

// now type system prevents invalid calls:
// num.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
name.toUpperCase(); // valid

console.log(num);
console.log(name);
console.log(status);


function getSomeValue<T>(value: T): T {
    return value;
}

let result1 = getSomeValue<string>("Hello, Generics!");
let result2 = getSomeValue<number>(42);
let result3 = getSomeValue<boolean>(true);

console.log(result1); // Output: Hello, Generics!
console.log(result2); // Output: 42
console.log(result3); // Output: true