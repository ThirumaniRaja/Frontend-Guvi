let user = {
    name : "John Doe",
    age : 30,
    email : "thiru@gmail.com"
}

Object.keys(user).forEach(key => {
    console.log(key + ": " + user[key]);
});