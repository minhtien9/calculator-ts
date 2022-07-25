interface calculatorState {
    preState: number;
    curState: number;
    input: number;
}
export interface rootState {
    calculator: calculatorState;
}
