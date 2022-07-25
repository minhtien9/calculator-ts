interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    setPreState: string;
    setCurState: string;
    setInput: string;
    setTotal: boolean;
    operator: string;
    total: boolean;
}
export interface rootState {
    calculator: calculatorState;
}
