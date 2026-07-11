import AddEmployee from "./AddEmployee"
import EmployeeList from "./EmployeeList"



function EmployeeSection() {
    
    return (
        <div>
            <h3>Employee Section</h3>

            <EmployeeList  />

            <AddEmployee />
        </div>
    )

}


export default EmployeeSection


// prop drilling.. is the process of passing data from the parent component to the deeply nested component thourhg the intermediate componenst that do not actually use the date/props.