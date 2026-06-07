// ...existing code...
interface TeamMember {
    memberId: number;
    memberName: string;
    skill: string;
}

interface Project {
    projectId: number;
    projectName: string;
    budget: number;
    teamMembers: TeamMember[];
}

interface Employee {
    empId: number;
    empName: string;
    designation: string;
    salary: number;
    projects: Project[];
}

interface Detpartment {
    depId: number;
    deptName: string;
    employees: Employee[];
}

interface Company {
    companyId: number;
    companyName: string;
    departments: Detpartment[];
}

const company: Company = {
    companyId: 1,
    companyName: "GUVI",
    departments: [
        {
            depId: 101,
            deptName: "Engineering",
            employees: [
                {
                    empId: 1,
                    empName: "RAM",
                    designation: "Senior Developer",
                    salary: 90000,
                    projects: [
                        {
                            projectId: 10001,
                            projectName: "Employee Management System",
                            budget: 5000000,
                            teamMembers: [
                                {
                                    memberId: 1,
                                    memberName: "ravi",
                                    skill: "React"
                                },
                                {
                                    memberId: 2,
                                    memberName: "shyam",
                                    skill: "Angular"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

console.log(company);
// ...existing code...