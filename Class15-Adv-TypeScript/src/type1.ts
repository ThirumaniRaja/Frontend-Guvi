// ...existing code...

// declaration merging for User
interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
}

const user: User = {
    id: 101,
    name: "Thiru",
    email: "thiru@gmail.com"
};
console.log(user);

// product + discount ... type intersection
type Product = {
    id: number;
    name: string;
};

type Discount = {
    discount: number;
};

type ProductWithDiscount = Product & Discount;

const mobile: Product & Discount = {
    id: 1,
    name: "iphone",
    discount: 10
};
console.log(mobile);

type PaymentStatus = "Pending" | "Success" | "Faild";
let payment: PaymentStatus = "Success";
console.log(payment);

// ...existing code...

// role union
type Role = "Admin" | "Manager" | "Employee";
let userRole: Role = "Admin";
console.log(userRole);

// interface + type
type OrderStatus = "Placed" | "Preparing" | "OutForDelivery";

interface Customer {
    customerId: number;
    customerName: string;
}

interface Order {
    orderId: number;
    totalAmount: number;
    customer: Customer;
    status: OrderStatus;
}

const order: Order = {
    orderId: 5001,
    totalAmount: 799,
    customer: {
        customerId: 101,
        customerName: "ram"
    },
    status: "OutForDelivery"
};
console.log(order);

// project + team members
type ProjectStatus = "NotStarted" | "Inprogress" | "InPROD";

interface TeamMember {
    memberId: number;
    memberName: string;
}

interface Project {
    projectID: number;
    projectName: string;
    status: ProjectStatus;
    teamMembers: TeamMember[];
}

const project: Project = {
    projectID: 1,
    projectName: "Website Redesign",
    status: "Inprogress",
    teamMembers: [
        { memberId: 1, memberName: "Alice" },
        { memberId: 2, memberName: "Bob" }
    ]
};          
console.log(project);

// ...existing code...

interface Employee {
    empid: number;
    empName: string;
    projects: Project[];
}

const employee1: Employee = {
    empid: 101,
    empName: "Ram",
    projects: [
        {
            projectID: 1,
            projectName: "guvi learning platform",
            status: "Inprogress",
            teamMembers: [
                { memberId: 1, memberName: "raj" },
                { memberId: 2, memberName: "ravi" }
            ]
        }
    ]
};

console.log(employee1);

