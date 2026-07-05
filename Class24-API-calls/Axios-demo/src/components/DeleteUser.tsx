import axios from "axios";

function DeleteUser() {

  const deleteUser = () => {

    axios
      .delete(
        "https://jsonplaceholder.typicode.com/users/1"
      )
      .then((response) => {
        console.log("User is deleted");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={deleteUser}>
        Delete User
      </button>
    </div>
  );
}

export default DeleteUser;