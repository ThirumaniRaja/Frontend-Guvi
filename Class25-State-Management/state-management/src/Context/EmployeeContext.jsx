
// import createcontext, usestate
import { createContext, useState } from "react";
// create the context 
export const EmployeeContext = createContext();
// provider component 
export function EmployeeProvider({children}) {


    // Employee state
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Ram"
        },

        {
            id: 2,
            name: "venkat"
        }
    ]);

    // function to add the employee 
    const addEmployee = () => {

        const newEmployee = {
            id: employees.length + 1,
            name: "Employee" + (employees.length + 1)
        };

        // update the state
        setEmployees([...employees, newEmployee])
    }

    return (

        <EmployeeContext.Provider value={{  // Provider shares data with every child component
            employees,
            addEmployee
        }}>
            {children}
        </EmployeeContext.Provider>
    )
}
