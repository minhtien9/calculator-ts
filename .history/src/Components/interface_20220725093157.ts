interface calculatorState {
    preState: number;
    curState: number;
    input;
}
export interface rootState {
    calculator: calculatorState;
}
