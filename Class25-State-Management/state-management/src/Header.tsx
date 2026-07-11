function Header({ employees }) {

  return (
    <div>
      <h3>
        Total Employees: {employees.length}
      </h3>
    </div>
  );
}

export default Header;