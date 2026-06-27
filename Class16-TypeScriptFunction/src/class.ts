// ...existing code...
// class is the blueprint for creating the objects that groups data(properties) and methods into a single unit...
// class is template that defines the properties an object created from it will have...

const student1 = {
    name: "Ram",
    age: 20,
    city: "bangalore",

    // function to display the student details
    displayInfo: function() {
        console.log("Student name:", this.name);
        console.log("Studenta age:", this.age);
        console.log("Student city:", this.city);
    }
}

student1.displayInfo();

const student2 = {
    name: "Thiru",
    age: 20,
    city: "Chennai",

    // function to display the student details
    displayInfo: function() {
        console.log("Student name:", this.name);
        console.log("Studenta age:", this.age);
        console.log("Student city:", this.city);
    }
}

student2.displayInfo();
//

const customer  = {
    name: "Thiru",
    city: "Bangalore",

    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    },

    displayInfo() {
        console.log("Customer name:", this.name);
        console.log("Customer city:", this.city);
    }
}

customer.displayInfo();


class Customer {
    name: string;
    city: string;

    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }

    displayInfo() {
        console.log("Customer name:", this.name);
        console.log("Customer city:", this.city);
    }
}

const customer1 = new Customer("Thiru", "Bangalore");
customer1.displayInfo();

const customer2 = new Customer("Ravi", "Chennai");
customer2.displayInfo();
