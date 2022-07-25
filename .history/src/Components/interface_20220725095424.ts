interface calculatorState {
    preState: number;
    curState: string;
    input: string;
}
export interface rootState {
    calculator: calculatorState;
}
