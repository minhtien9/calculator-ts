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
    initialState,
    reducers: {
        preState: (state: any, action: any) => {
            state.preState = action.payload;
        },
        curState: (state: any, action: any) => {
            state.curState = action.payload;
        },
        input: (state: any, action: any) => {
            state.input = action.payload;
        },
        operator: (state: any, action: any) => {
            state.operator = action.payload;
        },
        total: (state: any, action: any) => {
            state.total = action.payload;
        },
        setPreState: (state: any, action: any) => {
            state.preState = action.payload;
        },
        setCurState: (state: any, action: any) => {
            state.curState = action.payload;
        },
        setInput: (state: any, action: any) => {
            state.input = action.payload;
        },
        setTotal: (state: any, action: any) => {
            state.total = action.payload;
        },
        setOperator: (state: any, action: any) => {
            state.operator = action.payload;
        },
    },
});

export const {
    preState,
    curState,
    input,
    operator,
    total,
    setPreState,
    setCurState,
    setInput,
    setTotal,
    setOperator,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
