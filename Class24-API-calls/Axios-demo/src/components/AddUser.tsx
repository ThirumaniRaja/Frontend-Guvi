import axios from "axios";

function AddUser() {
  const addUser = () => {
    const newUser = {
      name: "RAM",
      email: "ram@gmail.com",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        console.log("user is added");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default AddUser;