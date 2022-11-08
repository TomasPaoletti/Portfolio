import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducer"

const store = configureStore({
    reducer: todoReducer,
})

export default store;