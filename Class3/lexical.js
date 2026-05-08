function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}

var fn = outer();
fn();

function counter() {
    var count = 0;
     function increment() {
        count++;
        console.log(count);
    }
     increment();
}   

var incre = counter();
incre();