interface calculatorState {
    preState: number;
    curState;
    input;
}
export interface rootState {
    calculator: calculatorState;
}
