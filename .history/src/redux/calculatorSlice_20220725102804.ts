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
           
         
            // state.operator = action.payload;
            // state.total = action.payload;
        },
        curState: (state: any, action: any) => {
           state.curState = action.payload;
        },
        input:(state: any, action: any)=>{
             state.input = action.payload;
        }
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
    },
});

export const { preState, setPreState, setCurState, setInput, setTotal } =
    calculatorSlice.actions;
export default calculatorSlice.reducer;
