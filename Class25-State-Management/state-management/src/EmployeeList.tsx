function EmployeeList({ employees }) {

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