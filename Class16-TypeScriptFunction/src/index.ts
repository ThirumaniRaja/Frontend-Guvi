// ...existing code...
const muliply = function(a: number, b : number): number {
    return a * b
}

console.log(muliply(5, 4))

// arrow functions... shorted syntax for the functions
const divide = (a: number, b: number):number => {
    return a / b
}
console.log(divide(20, 4))

// arrow function for th square
const square = (num: number) : number => num * num;
console.log(square(6))

// function type.. we can define the type of the function
let calculate: (x:number, y:number) => number;

calculate = function(x, y) {
    return x + y;
}

console.log(calculate(10, 5))

function processData(callback: () => void) {
    console.log("Processing data...");
    callback();
}

processData(() => {
    console.log("Data processed successfully!");
});

function displayUserInfo(user: { name: string; age: number }) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
}

displayUserInfo({name:"Thiruman", age: 29});


function enaFunction(number: number[]): void {
for(let num of number) {
    console.log(num);   
}
}

enaFunction([1, 2, 3, 4, 5]);