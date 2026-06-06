let message : string = "Hello, TypeScript!";
console.log(message);

let pass : boolean = true;
console.log(pass);

let count : number = 0;

if(count){
    console.log("Count is truthy");
} else {
    console.log("Count is falsy");
}

let names : string[] = ["Alice", "Bob", "Charlie"];
console.log(names);

let person : { name: string, age: number } = {
    name: "John",
    age: 30
};
console.log(person);

function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));