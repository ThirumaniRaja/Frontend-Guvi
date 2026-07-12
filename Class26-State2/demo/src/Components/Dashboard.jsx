import EmployeeStats from "./EmployeeStats"
import EmployeeSearch from "./EmployeeSearch"
import EmployeeList from "./EmployeeList"
import RecentEmployees from "./RecentEmployees"
import Attendance from "./Attendance"
import SalarySummary from "./SalarySummary"

function Dashboard() {

    return (
        <div className="dashboard">
            <h1>Employee Dashboard</h1>
            <EmployeeStats />
            <EmployeeSearch />
            <div className="grid">
                <EmployeeList />
                <RecentEmployees />
            </div>
            <div className="grid">
                <Attendance />
                <SalarySummary />
            </div>
        </div>
    )

}

export default Dashboard