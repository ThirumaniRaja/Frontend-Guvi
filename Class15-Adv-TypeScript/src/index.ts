// ...existing code...
// interface is a contract(blueprint) that defines the structure of an object

// it tell typescript
// 1) what properties should Exist
// 2) what type those properties should have
// 3) what method should be available

// interfaces helps us to crate the reusable object structure

const emp : {
    id: number;
    name: string;
    age: number;
} = {
    id: 1,
    name: "ram",
    age: 98
};

console.log(emp);

interface Employee {
    id: number;
    name: string;
    age: number;
}

const emp1: Employee = {
    id: 1,
    name: "Ram",
    age: 50
};

const emp2: Employee = {
    id: 2,
    name: "venkat",
    age: 40
};

console.log(emp1);
console.log(emp2);
// ...existing code...

// interface with methods
interface Student {
    id: number;
    name: string;
    display(): void;
}

const s1: Student = {
    id: 1,
    name: "Ram",
    display() {
        console.log(this.id);
        console.log(this.name);
    }
};

// call the display method
s1.display();

// interface with nested objects
interface Address {
    city: string;
    state: string;
    country: string;
    pincode: number;
}

interface Player {
    playerId: number;
    playerName: string;
    playerAddress: Address;
}

const player1: Player = {
    playerId: 7,
    playerName: "Sachin",
    playerAddress: {
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: 400001
    }
};

console.log(player1);
console.log(player1.playerAddress.city);
// ...existing code...
// ...existing code...

const player2: Player = {
    playerId: 18,
    playerName: "Virat",
    playerAddress: {
        city: "bangalore",
        state: "KA",
        country: "india",
        pincode: 560036
    }
};

const player3: Player = {
    playerId: 1,
    playerName: "Rahul",
    playerAddress: {
        city: "Chennai",
        state: "TN",
        country: "india",
        pincode: 400141
    }
};

console.log(player2);
console.log(player3);