import { useEffect } from "react";

import {useDispatch} from "react-redux";

// async thunk
import { fetchEmployees } from "../features/employeeSlice";

// components
import EmployeeStats from "./EmployeeStats"
// import EmployeeSearch from "./EmployeeSearch"
import EmployeeList from "./EmployeeList"
import RecentEmployees from "./RecentEmployees"
import Attendance from "./Attendance"
// import SalarySummary from "./SalarySummary"


// dashboard component is responsible for making ONE API CALL

function Dashboard() {

    // dispatch funcion  ...used to dispatch the redux actions

    const dispatch = useDispatch();

    // runs only once, make one api call
    useEffect(() => {
        dispatch(fetchEmployees())
    }, [dispatch])

    return (
        <div className="dashboard">
            <h1>Employee Dashboard</h1>
            <EmployeeStats />
            {/* <EmployeeSearch /> */}
            <div className="grid">
                <EmployeeList />
                <RecentEmployees />
            </div>
            <div className="grid">
                <Attendance />
                {/* <SalarySummary /> */}
            </div>
        </div>
    )

}

export default Dashboard