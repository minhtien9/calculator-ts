interface calculatorState {
    preState: () => void;
    curState: () => void;
    input: string;
}
export interface rootState {
    calculator: calculatorState;
}
