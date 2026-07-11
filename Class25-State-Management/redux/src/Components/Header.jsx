import { useSelector } from "react-redux";

function Header() {

  // read the store
  const employees = useSelector(
    (state) => state.employee.employees
  );

  return (
    <div>
      <h3>
        Total Employees: {employees.length}
      </h3>
    </div>
  );
}

export default Header;