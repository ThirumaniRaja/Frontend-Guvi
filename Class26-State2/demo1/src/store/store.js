//creates the redux store....every component reads data from here

import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "../features/employeeSlice"

export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
})