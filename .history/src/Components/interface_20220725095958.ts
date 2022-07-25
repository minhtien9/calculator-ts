interface calculatorState {
    preState: () => void;
    curState: () => void;
    input: () => void;
}
export interface rootState {
    calculator: calculatorState;
}
