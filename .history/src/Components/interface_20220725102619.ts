interface calculatorState {
    inputNumRedux: [];
    setPreState: string;
    setCurState: string;
    setInput: string;
    setTotal: boolean;
}
export interface rootState {
    calculator: calculatorState;
}
