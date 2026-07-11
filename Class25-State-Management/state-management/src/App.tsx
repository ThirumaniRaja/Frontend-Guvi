import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {

  // state
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ram"
    },
    {
      id: 2,
      name: "venkat"
    }
  ]);

  // function to add the employee
  const addEmployee = () => {

    const newEmployee = {
      id: employees.length + 1,
      name: "Employee" + (employees.length + 1)
    };

    // update the state
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h1>Employee Management System</h1>

      <Dashboard
        employees={employees}
        addEmployee={addEmployee}
      />
    </div>
  );
}

export default App;