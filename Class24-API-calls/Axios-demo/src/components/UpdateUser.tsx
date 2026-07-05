import axios from "axios";

function UpdateUser() {

  const updateEmail = () => {

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          email: "newEmail@gmail.com"
        }
      )
      .then((response) => {
        console.log("Email is updated");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={updateEmail}>
        Update Email
      </button>
    </div>
  );
}

export default UpdateUser;