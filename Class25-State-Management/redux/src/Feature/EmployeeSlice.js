import { createSlice } from "@reduxjs/toolkit";

// initialState

const initialState = {
    employees: [
        {
            id: 1,
            name: "Ram"
        },

        {
            id: 2,
            name: "venkat"
        }
    ]
};

// create the slice 
const employeeSlice = createSlice({
    // slice name
    name: "employee",
    // initial state
    initialState,
    // reducers 
    reducers: {
        addEmployee: (state) => {

            state.employees.push({

                id: state.employees.length + 1,
                name: "Employee" + (state.employees.length + 1)
            })
        }

    }
});

// export the action 
export const {addEmployee} = employeeSlice.actions;

//export the reducer 
export default employeeSlice.reducer