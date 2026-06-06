// ...existing code...
// any... can store any type of value
let data: any = "hello";
data = 100;
data = true;
data = 10.5;

console.log(data);

let response: any;

response = {
  id: 1
};
response = "success";
console.log(response);

// unknown...safer version of any

let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

let apiData: unknown = "product is laptop";
if (typeof apiData === "string") {
  console.log(apiData.length);
}

// null..represent the intentionally empty value
let manager: null = null;
console.log(manager);

// undefined... represents a value that is not assigned
let address: undefined = undefined;
console.log(address);
//
// ...existing code...
let deliveryData: undefined = undefined;
console.log(deliveryData);

// object stores data in key-value pairs
let emp: object = {
  id: 1,
  name: "ram"
};
console.log(emp);

let product: object = {
  productId: 101,
  productName: "Laptop",
  price: 65000
};
console.log(product);

// =========

let userData: unknown = "Thiru";
if (typeof userData === "string") {
  console.log(userData.toUpperCase());
}
userData = 100;
// console.log(userData.toUpperCase());
// ...existing code...