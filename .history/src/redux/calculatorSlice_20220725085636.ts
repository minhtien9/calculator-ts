import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    preState: "",
    curState: "",
    input: "",
    operator: "",
    total: false,
};

export const calculatorSlice = createSlice({
    name: "calculator",
});
