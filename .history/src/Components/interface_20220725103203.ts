interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    operator: string;
    total: boolean;

    setPreState: string;
    setCurState: string;
    setInput: string;
    setTotal: boolean;
    setOperator: string;
}
export interface rootState {
    calculator: calculatorState;
}
