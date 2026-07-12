import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function Attendance() {

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

        fetchEmployees();

    }, []); //adding the '[]'.. because api should happen only once


    // show the loader
    if(loading) {
        return <h2>Loading Employees....</h2>
    }

    // show error
    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="card">
            <h2>Attendance</h2>
            <h3>Present: {employees.length -3}</h3>
            <h3>Absent: 3</h3>

        </div>
    )

}

export default Attendance