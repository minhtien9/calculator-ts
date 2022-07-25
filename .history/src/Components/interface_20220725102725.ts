interface calculatorState {
    preState: string;
    setPreState: string;
    setCurState: string;
    setInput: string;
    setTotal: boolean;
}
export interface rootState {
    calculator: calculatorState;
}
