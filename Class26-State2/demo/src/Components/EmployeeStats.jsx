import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function EmployeeStats() {

    const [employees, setEmployees] = useState([]);

    // loading state
    const [loading, setLoading] = useState(false);

    // error
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchEmployees() {
            try {

                setLoading(true);
                const data = await getEmployees();
                setEmployees(data)

            } catch(error) {
                setError("unable to fetch employees")
            } finally {
                setLoading(false)
            }
        }
        fetchEmployees()
    }, []);


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