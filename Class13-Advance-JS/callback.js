function getUser(callback) {
    console.log("Fetching user...");
    const user = {
        id: 101,
        name: "venkat"
    }
    callback(user)
}

function getCart(user, callback) {
    console.log(`Fetching cart for ${user.name}`);
    // mock the cart
    const cart = {
        items: ["Laptop", "Mouse"]
    }
    callback(cart)
}

function createOrder(cart, callback) {
    console.log("Creating order");
    const order = {
        orderId: 1001
    }
    callback(order)
}

function makePayment(order, callback) {
    console.log(`Processing payment for order ${order.orderId}...`);
    const payment = {
        status: "success"
    }
    callback(payment)
}

// example usage (nested callbacks)
function sendMail(payment,callback) {
    console.log(`Sending email for payment status: ${payment.status}`);
   callback("Email sent successfully");
}

getUser(function (user) {
    getCart(user, function (cart) {
        createOrder(cart, function (order) {
            makePayment(order, function (payment) {
                sendMail(payment, function (message) {
                    console.log(message);
                });
            });
        });
    });
});


