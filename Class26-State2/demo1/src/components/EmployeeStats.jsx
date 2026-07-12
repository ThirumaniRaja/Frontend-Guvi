import { useSelector } from "react-redux";


function EmployeeStats() {

    const {employees, loading, error } = useSelector(
        state => state.employee
    );




    if(loading) {
        return <h1>Loading statistics </h1>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="card">
            <h2>Employee Statistics</h2>
            <h3>Total Employees: {employees.length}</h3>
        </div>
    )

}

export default EmployeeStats