interface calculatorState {
    preState: number;
    curState: number;
    input: string;
}
export interface rootState {
    calculator: calculatorState;
}
