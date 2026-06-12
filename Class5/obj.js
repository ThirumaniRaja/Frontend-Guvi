let user = {
    name: "Thiru",
    age: 24,
    city: "Mumbai",
    profession: "Developer",
    address: [
        {
            street: "123 Main St",
            city: "Mumbai",
            state: "MH",
            zip: "400001"
        }
    ] 
}

for(let key in user) {
    console.log(key + ": " + user[key]);
}


let users = [
    {name: "Thiru", age: 24, city: "Mumbai", profession: "Developer"},
    {name: "Thiru", age: 30, city: "Pune", profession: "Designer"},
    {name: "Raja", age: 28, city: "Bangalore", profession: "Manager"}   
]

for(let user of users) {
    console.log(user.name + " - " + user.profession);
}

let ipl = {
    teams: "CSK",
    win:"yes",
    color:"yellow"
}

for(let key in ipl) {
    console.log(key + ": " + ipl[key]);
}

let keys = Object.keys(ipl);
keys.forEach(key => {
    console.log(key + ": " + ipl[key]);
});

let values = Object.values(ipl);
values.forEach(value => {
    console.log(value);
});


for(let [key ,value] of Object.entries(ipl)) {
    console.log(key + ": " + value);
}

