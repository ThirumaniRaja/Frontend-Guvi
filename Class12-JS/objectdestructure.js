const student = {
    id: 101,
    name: "venkat",
    role: "Mentor",
    city: "bangalore"
};

// access each property
// const id = student.id;
// const name = student.name;
// const role = student.role;
// const city = student.city;

// new way
const {id, name, role, city} = student;

console.log(id);
console.log(name);
console.log(role);
console.log(city);

const employee = {
    name: "Ram",
    city: "bangalore"
};
// different variable name..normal way
// const employeeName = employee.name;
// const employeeCity = employee.city;
const {name: employeeName, city: employeeCity} = employee;
console.log(employeeName, employeeCity);

const user = {
    name: "ram"
};
// normal way
// const city2 = user.city2 || "bangalore";
const {city2 = "bangalore"} = user;
console.log(city2);