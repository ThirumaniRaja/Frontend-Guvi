// ...existing code...
let product: {
  id: number;
  name: string;
  price: number;
} = {
  id: 191,
  name: "iphone",
  price: 90000
};

// product.price = "ninety thousand";

console.log(product);

let employee: {
  empId: number;
  empName: string;
  department: string;
  address: {
    city: string;
    state: string;
    zip: number;
  };
  skills: string[];
  projects: {
    projectId: number;
    projectName: string;
    description: string;
    teamMembers: {
      memberName: string;
      memberSkill: string;
    }[];
  }[];
} = {
  empId: 1001,
  empName: "Ravi",
  department: "Development",
  address: {
    city: "Chennai",
    state: "TN",
    zip: 600001
  },
  skills: ["TypeScript", "Angular", "Node"],
  projects: [
    {
      projectId: 1,
      projectName: "Project A",
      description: "Internal tool",
      teamMembers: [
        { memberName: "Suresh", memberSkill: "Frontend" },
        { memberName: "Kumar", memberSkill: "Backend" }
      ]
    }
  ]
};

console.log(employee);