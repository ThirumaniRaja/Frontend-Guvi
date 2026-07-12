import { useSelector } from "react-redux";


function Attendance() {


    const {employees, loading, error } = useSelector(
        state => state.employee
    )


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