// import AddEmployee from "./AddEmployee";
// import EmployeeList from "./EmployeeList";

// function EmployeeSection({ employees, addEmployee }) {

//   return (
//     <div>
//       <h3>Employee Section</h3>

//       <EmployeeList employees={employees} />

//       <AddEmployee addEmployee={addEmployee} />
//     </div>
//   );
// }

// export default EmployeeSection;

// // Prop drilling is the process of passing data from the parent
// // component to deeply nested child components through props.


import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

function EmployeeSection() {

  return (
    <div>
      <h3>Employee Section</h3>

      <EmployeeList />

      <AddEmployee  />
    </div>
  );
}

export default EmployeeSection;