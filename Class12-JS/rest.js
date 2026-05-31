function sum(...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40, 50));
console.log(sum(10, 20, 50, 60, 80, 100, 200, 500, 600));