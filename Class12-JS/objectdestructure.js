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

// console.log(id);
// console.log(name);
// console.log(role);
// console.log(city);

const employee = {
    name: "Ram",
    city: "bangalore",
    age:30
};
// different variable name..normal way
// const employeeName = employee.name;
// const employeeCity = employee.city;
const {name: employeeName, city: employeeCity, age: employeeAge} = employee;
// console.log("emp",employeeName, employeeCity, employeeAge);

const user = {
    name: "ram",
    address: {
        city: "bangalore",
        state: "KA"
    },
    skills: ["HTML", "CSS"]
};


const updatedUser = {
    ...user,
    address: {
        ...user.address,
        city: "chennai"
    },
    skills: [...user.skills, "javascript"]
  
};

console.log("user",user);
console.log("updated user", updatedUser);


const students = {
    name: "venkat",
    city: "bangalore",
    deppartment: {
        name: "cse",
        head: "ram",
        caterogy: {
            name: "engineering",
            type: "full time"
         }
    },
    skills: ["HTML", "CSS"]
};

const updatedStudents = {
    ...students,
    deppartment: {
      ...students.deppartment,
      caterogy:{
        ...students.deppartment.caterogy,
        name:"IT"
      } 
  }
};

console.log(updatedStudents)