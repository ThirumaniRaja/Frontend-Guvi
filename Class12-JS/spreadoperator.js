let user = {
  id: 1,
  name: "venkat",
  address: {
    city: "bangalore",
    state: "KA"
  },
  skills: ["HTML", "CSS"]
};

// console.log(user);

// update the address, skills with modifying the object
let finalUser = {
    ...user,
    name: "Thiru",

    ...user.address,
    city: "chennai",
}

console.log(finalUser);