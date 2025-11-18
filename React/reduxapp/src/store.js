import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice ,increment,decrement } from "./Slice/CounterSlice";


export const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
});