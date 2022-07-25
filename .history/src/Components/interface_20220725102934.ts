interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    operator: string;
    total: string;
    setPreState: string;
    setCurState: string;
    setInput: string;
    setTotal: boolean;
}
export interface rootState {
    calculator: calculatorState;
}
