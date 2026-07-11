

// import the configure store

import { configureStore } from "@reduxjs/toolkit";

// import the employee reducer 
import employeeReducer from "../Feature/EmployeeSlice"

// create the redux store 

export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
})
