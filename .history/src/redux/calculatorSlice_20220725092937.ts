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
        inputNum: (state: any, action: any) => {
            state.preState = action.payload;
            state.curState = action.payload;
            state.input = action.payload;
        },
    },
});

export const { inputNum } = cal;
export default calculatorSlice.reducer;
