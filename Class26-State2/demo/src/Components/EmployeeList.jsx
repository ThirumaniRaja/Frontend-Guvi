import { useEffect, useState } from "react";

import { getEmployees } from "../services/employeeService";
function EmployeeList() {

    // create the employee state..
    const [employees, setEmployees] = useState([]);

    // loading.. show the loader while api is executing
    const [loading, setLoading] = useState(false);

    // error
    const [error, setError] = useState('');


    useEffect(() => {
        // async function. return promise
        async function fetchEmployees() {
            try {
                // start loader
                setLoading(true);

                // api call
                const data = await getEmployees();

                // save API data into state
                setEmployees(data)
            } catch(error) {
                // save the error
                setError("Unable to fetch the employees")
            } finally {
                // stop loader
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
            <h2>Employee List</h2>
            {
                employees.map((employee) => (
                    <div key={employee.id} className="employee">
                        <h4>
                            {employee.firstName} {employee.lastName}
                        </h4>
                        <p>
                            {employee.university}
                        </p>
                        <p>
                            {employee.email}
                        </p>
                    </div>
                ))
            }
        </div>
    )

}

export default EmployeeList