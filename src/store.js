import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactAppjs/contactSlice";
const store = configureStore({
    reducer:{
        count:contactSlice
    }
})

export default store