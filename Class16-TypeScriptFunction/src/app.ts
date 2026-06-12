function login(username: string, password: string): boolean {
    if (username === "admin" && password === "welcome1234") {
        return true;
    }
    return false;
}

console.log(login("admin", "welcome1234"));

// cal the final product after the discount
function calCalculateDiscount(price: number, discountPercentage: number): number {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
}

const finalPrice = calCalculateDiscount(50000, 10);
console.log(finalPrice);

// api response function
interface User {
    id: number;
    name: string;
}

function getUserResponse(user: User): object {
    return {
        success: true,
        data: user,
        message: "User fetched successfully"
    };
}

console.log(getUserResponse({id: 1, name: "Thiru"}));

type role = "admin" | "user";

function checkUserRole(role: role): boolean {
    if (role === "admin") {
        return true;
    }
    return false;
}

console.log(checkUserRole("admin"));
console.log(checkUserRole("user"));