// API call will be present here, all the components will call this service

export async function getEmployees() {

  // call API
  const response = await fetch("https://dummyjson.com/users");

  // convert the response to JSON
  const data = await response.json();

  // return the employee array
  return data.users;
}