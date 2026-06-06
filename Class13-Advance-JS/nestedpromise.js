// function login(){
//     return Promise.resolve("Login successful");
// }

// function getCart(){
//     return Promise.resolve("Cart fetched");
// }

// function createOrder(){
//     return Promise.resolve("Order created");
// }

// function makePayment(){
//     return Promise.resolve("Payment successful");
// }

//promise chaining
// login()
//     .then((message) => {
//         console.log(message);
//         return getCart();
//     }).then((message) => {
//         console.log(message);
//         return createOrder();
//     }).then((message) => {
//         console.log(message);
//         return makePayment();
//     }).then((message) => {
//         console.log(message);
//     }).catch((error) => {
//         console.error(error);
//     }); 

function login(){
    return Promise.resolve("Login successful");
}

function getCart(){
    return Promise.resolve("Cart fetched");
}

function createOrder(){
    return Promise.resolve("Order created");
}

function makePayment(){
    return Promise.resolve("Payment successful");
}

async function processOrder() {   
    let log = await login();
    console.log(log);
    let cart = await getCart();
    console.log(cart);
    let order = await createOrder();
    console.log(order);
    let payment = await makePayment();
    console.log(payment);

}

processOrder().catch((error) => {
    console.error(error);
});