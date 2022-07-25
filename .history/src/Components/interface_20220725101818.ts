interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    setPreState: string;
    setCurState: string;
    setInput: string;
}
export interface rootState {
    calculator: calculatorState;
}
