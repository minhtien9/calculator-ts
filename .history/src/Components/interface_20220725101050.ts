interface calculatorState {
    preState: string;
    curState: string;
    input: string;
    setPreState: string;
}
export interface rootState {
    calculator: calculatorState;
}
