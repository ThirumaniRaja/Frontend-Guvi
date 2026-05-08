
 function sayHello(){
console.log("Hi How are you?");
}

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

greet("Krishvin", sayHello);