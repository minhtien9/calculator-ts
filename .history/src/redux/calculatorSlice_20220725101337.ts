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
        inputNumRedux: (state: any, action: any) => {
            state.preState = action.payload;
            state.curState = action.payload;
            state.input = action.payload;
        },
        setPreState: (state: any, action: any) => {
            state.preState = action.payload;
        },
        setCurState: (state: any, action: any) => {
            state.curState = action.payload;
        },
    },
});

export const { inputNumRedux, setPreState, setCurState } =
    calculatorSlice.actions;
export default calculatorSlice.reducer;
