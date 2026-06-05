const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

promise1.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});


function fetchData(username, password) {
    return new Promise((resolve, reject) => {
      if(username === "admin" && password === "password") {
          resolve("Data fetched successfully");
      } else {
          reject("Invalid credentials");
      }
    });
}

fetchData("admin", "password").then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
