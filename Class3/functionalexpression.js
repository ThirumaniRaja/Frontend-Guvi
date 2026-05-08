// const greet = function(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Thiru");



// setInterval(function() {
//     console.log("This message is displayed every 2 seconds.");
// }, 2000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares); // Output: [1, 4, 9, 16, 25]

setTimeout(function() {
    console.log("This message is displayed after 3 seconds.");
}, 3000);

//anoymous function
(function() {
    console.log("This is an anonymous function that runs immediately.");
})();

(function(a,b) {
    console.log("This is an anonymous function that runs immediately.for addition",a+b);
})(2,3);


