import { useEffect, useState } from "react";

function User() {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch(error => {
                console.error("Error fetching users:", error);
            })
            .finally(() => {
                console.log("Fetch operation completed.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Users List</h3>
            <div>
                {users.map((user: any) => (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User;