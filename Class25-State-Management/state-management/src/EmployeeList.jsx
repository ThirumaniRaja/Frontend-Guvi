// function EmployeeList({ employees }) {

// import { useContext } from "react";

//   return (
//     <div>
//       <h3>Employee List</h3>

//       {
//         employees.map((employee) => (
//           <p key={employee.id}>
//             {employee.name}
//           </p>
//         ))
//       }
//     </div>
//   );
// }

// export default EmployeeList;

import { useContext } from 'react';
import { EmployeeContext } from "./Context/EmployeeContext";

function EmployeeList() {

  const {employees} = useContext(EmployeeContext);

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