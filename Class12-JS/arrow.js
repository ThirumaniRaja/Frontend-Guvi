// normal way
function showMessage() {
    console.log("welcome")
}

showMessage()

const showMessage1 = () => {
    console.log("welcome")
}
showMessage1()

// ex1
// function greet(name){
//     console.log("hello " + name)
// }
// greet("venkat")

const greet = (name) => console.log("hello " + name)

greet("venkat")

// ex2
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 40))

const add = (a, b) =>  a + b;
console.log(add(10, 40))

// ex3
// function getDiscountPrice(price, discount) {
//     return price - discount
// }
// console.log(getDiscountPrice(1000, 200))

const getDiscountPrice = (price, discount) => price - discount;
console.log(getDiscountPrice(1000, 200));