interface calculatorState {
    preState: string;
    curState: string;
    input: string;
}
export interface rootState {
    calculator: calculatorState;
}
