// ...existing code...
function sendNotification() {
    console.log("food is ready, notification sent to customer")
}

function sendSMS() {
    console.log("SMS sent to customer")
}

function updateOrderStatus() {
    console.log("order status changed to ready")
}

function generateInvoice() {
    console.log("invoice generated")
}

function prepareFood(callback){
    // execute the callback
    callback()
}

prepareFood(sendNotification); //start the process
prepareFood(sendSMS);
prepareFood(updateOrderStatus);
prepareFood(generateInvoice)
// ...existing code...