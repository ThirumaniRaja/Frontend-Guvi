function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function evenorodd(a) {
    if (a % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15      
console.log(evenorodd(5)); // Output: Odd
console.log(evenorodd(6)); // Output: Even