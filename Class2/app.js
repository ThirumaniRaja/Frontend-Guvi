let x = 10;
let y = 20;
let z = 45;
if(x>y && x>z){
    console.log("x is greater than y and z");
}
else if(y>x && y>z){
    console.log("y is greater than x and z");
} else {
    console.log("z is greater than x and y");
}


let age = 25;
let passport = true;
let visa = true;
if(age >= 18 ){
if(passport){
    if(visa){
        console.log("You are eligible to travel");
    } else {
        console.log("You need a visa to travel");
    } 
} else {
    console.log("You need a passport to travel");   
}
} else {
    console.log("You are not eligible to travel");
}

let grade = "C";
switch(grade){
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}