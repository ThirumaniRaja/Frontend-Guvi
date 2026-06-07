type Student = {
    name: string;
    age?: number;
}

let student1: Student = {
    name: "venkat",
    age: 20
}

let student2: Student = {
    name: "ravi"
}

console.log(student1)
console.log(student2)

type Cutomer = {
    name: string,
    city?: string
}

function printCustomer(customer: Cutomer){
    console.log("Name:", customer.name);
    console.log("City", customer.city);
}

printCustomer({
    name: "venkat"
})

printCustomer({
    name: "ram",
    city: "bangalore"
})

// ...existing code...
type Aadhar = {
    readonly aadharID: number;
    address: string;
}

const citizen: Aadhar = {
    aadharID: 587485474185,
    address: 'bangalore'
}

console.log(citizen);
// citizen.aadharID = 987485747; // Error: cannot assign to 'aadharID' because it is a read-only property
citizen.address = "bangalore, bellandur 560103";
console.log(citizen);