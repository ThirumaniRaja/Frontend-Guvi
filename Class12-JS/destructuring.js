// means extracting the values from an array and storing them in variables easily

let mobiles = ["oppo", "vivo", "BPL", "Iphone"];
// let one = mobiles[0];
// let two = mobiles[1];
// let three = mobiles[2];
// let four = mobiles[3];

// destructuring way
let [one, two, three, four] = mobiles;
console.log(one, two, three, four);

let student = ["Ram", 20, "bangalore"];
// old way
// let name = student[0];
// let age = student[1];
// let city = student[2];
// latest
let [name, age, city] = student;
console.log(name);
console.log(age);
console.log(city);

let names = ["ram", "Thiru", "sai"];
// let first = names[0];
// let third = names[2];
let [first, , third] = names;
console.log(first);
console.log(third);

let employee = ["ram"];
//old way
// let name1 = employee[0];
// let city1 = employee[1] || "bangalore";
//latest
let [name1, city1 = "bangalore"] = employee;
console.log(name1);
console.log(city1);

function getUser() {
    return ["ram", "Thiru"]
}
//old way
// let user = getUser();
// let name = user[0];
// let role = user[1];
let [name2, role] = getUser();
console.log(name2);
console.log(role);