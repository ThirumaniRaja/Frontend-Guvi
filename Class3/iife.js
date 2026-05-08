let authLogin = (function() {
    let users = [
        { username: "admin", password: "password123" },
        { username: "user1", password: "pass1" },];

        return {
            login: function(username, password) {
                let user = users.find(function(u) {
                    return u.username === username && u.password === password;
                });
                if (user) {
                    console.log("Login successful for user: " + username);
                } else {
                    console.log("Invalid username or password.");
                }
            }
        };  
    })();

    authLogin.login("admin", "password123"); // Login successful for user: admin
    authLogin.login("user1", "wrongpass"); // Invalid username or password.
