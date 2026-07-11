import Header from "./Header";
import EmployeeSection from "./EmployeeSection";

function Dashboard({ employees, addEmployee }) {

  return (
    <div>
      <h2>Dashboard</h2>

      {/* to header component i am passing employees */}
      <Header employees={employees} />

      {/* to employee section component i am passing the props */}
      <EmployeeSection
        employees={employees}
        addEmployee={addEmployee}
      />
    </div>
  );
}

export default Dashboard;