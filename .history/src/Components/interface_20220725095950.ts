interface calculatorState {
    preState: () => void;
    curState: string;
    input: string;
}
export interface rootState {
    calculator: calculatorState;
}
