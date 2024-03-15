import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./sliceTask";


export const store = configureStore({reducer:{
    task: taskReducer,
}})