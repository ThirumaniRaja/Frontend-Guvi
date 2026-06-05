// ...existing code...
// callback is a function that is passed as an argument
// to another function and is executed later after some task is completed

// a callback is a function that is passed into another function and called inside that function !

function sendNotification() {
    console.log("food is ready, notification sent to customer")
}

function sendSMS() {
    console.log("SMS sent to customer")
}

function updateOrderStatus() {
    console.log("order status changed to ready")
}

function generateInvoice()
{
    console.log("invoice generated")
}

function prepareFood(){
    console.log("preparing food");
    // all actions are hardcoded
    sendNotification();
    sendSMS(); //whatapp mssg
    updateOrderStatus();
    generateInvoice()
}

prepareFood(); //start the process

// send sms, send email, send whatsapp message
// ...existing code...