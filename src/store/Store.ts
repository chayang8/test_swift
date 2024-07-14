import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./Reducer"
import editData from "./Reducer2"

const reducerform = formSlice
const reduceredit = editData
export const store = configureStore({
    reducer:{
        reducerform,
        reduceredit
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;