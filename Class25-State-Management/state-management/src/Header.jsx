// function Header({ employees }) {

//   return (
//     <div>
//       <h3>
//         Total Employees: {employees.length}
//       </h3>
//     </div>
//   );
// }

// export default Header;

import { useContext } from "react";

import { EmployeeContext } from "./Context/EmployeeContext";

function Header() {

  const {employees} = useContext(EmployeeContext)

  return (
    <div>
      <h3>
        Total Employees: {employees.length}
      </h3>
    </div>
  );
}

export default Header;