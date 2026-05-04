let balance = 1000;
let choice = 1;


do {    
    console.log("Your current balance is: " + balance);
    choice--;
} while(choice > 0);

let pin = 1234;
let attempts = 3;
let enteredPin = 1111;

while(enteredPin !== pin && attempts > 0){
    console.log("Incorrect PIN. You have " + attempts + " attempts left.");
    attempts--;
    enteredPin = 1111; // Simulate entering PIN again
}

if(enteredPin === pin){
    console.log("PIN accepted. You can proceed with your transactions.");
} else {
    console.log("Your account is locked due to too many incorrect attempts.");
}
