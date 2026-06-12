// ...existing code...

function greet(name: string): string {
    return "Hello " + name;
}
console.log(greet("Thiru"));

// function without parameters
function sayHello(): void {
    console.log("hello world");
}
sayHello();

// number
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));

function getFullName(firstname: string, lastName: string) {
    return firstname + " " + lastName;
}
console.log(getFullName("Thiru", "gopichand"));

// boolean value
function isAdult(age: number): boolean {
    return age >= 18;
}
console.log(isAdult(20)); // true
console.log(isAdult(10)); // false

// ...existing code...

// ...existing code...

// optional parameter ?
function welcome(name: string, city?: string): string {
    if (city) {
        return `Welcome ${name} from ${city}`;
    }
    return `welcome ${name}`;
}

console.log(welcome("Thiru"));
console.log(welcome("Thiru", "banglore"));

// default parameters.. provide the default value if the user does not pass
function greetUser(name: string = "guest"): string {
    return `Hello ${name}`;
}
console.log(greetUser("Thiru"));
console.log(greetUser());

// ...existing code...