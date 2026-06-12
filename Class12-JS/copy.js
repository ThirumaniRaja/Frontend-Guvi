let mobiles = ['oppo', 'vivo', 'samsung'];

let copy = [];

for(let i = 0; i<mobiles.length; i++){
    copy[i] = mobiles[i]
}

console.log(copy); //copy array
console.log(mobiles); //original array

// with spread
let mobiles1 = ['bpl', 'vivo', 'samsung'];

let copy1 = [...mobiles1]; //

console.log(copy1); //copy array
console.log(mobiles1); //original array

// i wanted to merge two arrays
let frontend = ["html", "css"];
let backend = ["nodejs", "mongodb"];

let fullStack = frontend.concat(backend); //old way
let fullStack1 = [...frontend, ...backend]; //with spread
console.log(fullStack);
console.log(fullStack1);

// add the itesm to the array
let movies = ["RRR", "veerabhadra"];
movies.push("bahubali"); //normal way
let newMovies = [...movies, "new movie"]; //spread operator

console.log(movies);
console.log(newMovies);

// object
let employee = {
    id: 1,
    name: "RAM"
};

let employee1 = {
    id: 2,
    name: "Thiru"
};

let copyEmp = Object.assign({}, employee); //normal way
let copyEmp1 = {...employee};
console.log(copyEmp);
console.log(copyEmp1);

// merge
let mergEmp = Object.assign({}, employee, employee1);
let mergemp1 = {...employee, ...employee1};
console.log("merge", mergEmp);
console.log(mergemp1);