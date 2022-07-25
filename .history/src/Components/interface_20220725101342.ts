interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    setPreState: string;
    setCurState: string;
}
export interface rootState {
    calculator: calculatorState;
}
