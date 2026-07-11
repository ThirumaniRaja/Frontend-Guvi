import { useSelector } from "react-redux";

function EmployeeList() {

  // read the store
  const employees = useSelector(
    (state) => state.employee.employees
  );

  return (
    <div>
      <h3>Employee List</h3>

      {
        employees.map((employee) => (
          <p key={employee.id}>
            {employee.name}
          </p>
        ))
      }
    </div>
  );
}

export default EmployeeList;