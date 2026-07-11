// function AddEmployee({ addEmployee }) {
//   return (
//     <div>
//       <button onClick={addEmployee}>
//         Add Employee
//       </button>
//     </div>
//   );
// }

// export default AddEmployee;


import { useContext } from 'react';
import { EmployeeContext } from "./Context/EmployeeContext";

function AddEmployee() {

   const {addEmployee } = useContext(EmployeeContext);
    
  return (
    <div>
      <button onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  );
}

export default AddEmployee;