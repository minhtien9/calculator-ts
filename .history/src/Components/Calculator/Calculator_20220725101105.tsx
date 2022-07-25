import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import "./Calculator.css";
import { rootState } from "../interface";
import { inputNumRedux } from "../../redux/calculatorSlice";

// enum operators {
//     addition = "+",
//     subtraction = "-",
//     multiplication = "*",
//     division = "/",
// }
const Calculator: React.FC = () => {
    const preState = useSelector(
        (state: rootState) => state.calculator.preState
    );
    const curState = useSelector(
        (state: rootState) => state.calculator.curState
    );
    const input = useSelector((state: rootState) => state.calculator.input);

    const dispatch = useDispatch();

    // const [preState, setPreState] = useState<string>("");
    // const [curState, setCurState] = useState<string>("");
    // const [input, setInput] = useState<string>("0");
    const [operator, setOperator] = useState<string>("");
    const [total, setTotal] = useState<boolean>(false);

    const inputNum = (e: any) => {
        if (curState.includes(".") && e.target.innerText === ".") return;

        if (total) {
            setPreState("");
        }

        curState
            ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        // setInput(curState);
        dispatch(inputNumRedux(curState));
    }, [curState]);

    useEffect(() => {
        // setInput("0");
        dispatch(inputNumRedux(input("0")));
    }, []);

    const operatorType = (e: any) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (curState === "") return;
        if (preState !== "") {
            equals();
        } else {
            setPreState(curState);
            setCurState("");
        }
    };

    const equals = (e?: any) => {
        if (e?.target.innerText === "=") {
            setTotal(true);
        }
        let cal;
        switch (operator) {
            case "/":
                cal = Number(parseFloat(preState) / parseFloat(curState));
                break;
            case "+":
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
            case "X":
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
            case "-":
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
            default:
                return;
        }
        setInput("");
        setPreState(cal);
        setCurState("");
    };

    const minusPlus = () => {
        if (curState.charAt(0) === "-") {
            setCurState(curState.substring(1));
        } else {
            setCurState("-" + curState);
        }
    };

    const percent = () => {
        preState
            ? setCurState(
                  String((parseFloat(curState) / 100) * parseFloat(preState))
              )
            : setCurState(String(parseFloat(curState) / 100));
    };
    const reset = () => {
        setPreState("");
        setCurState("");
        setInput("0");
    };

    return (
        <div className='container'>
            <div className='wrapper'>
                {/* Screen UI */}
                <div className='screen'>
                    {input !== "" || Number(input) === 0 ? (
                        <NumberFormat
                            value={input}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    ) : (
                        <NumberFormat
                            value={preState}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    )}
                </div>

                {/* Row 1 */}

                <Button
                    label='AC'
                    classStyle='btn'
                    // handleOnClick={() => checkType("reset")}
                    handleOnClick={reset}
                />

                <Button
                    label='%'
                    classStyle='btn'
                    // handleOnClick={() => checkType("percent")}
                    handleOnClick={percent}
                />
                <Button
                    label='+/-'
                    classStyle='btn'
                    // handleOnClick={() => checkType("minusPlus")}
                    handleOnClick={minusPlus}
                />
                <Button
                    label='/'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 2 */}
                <Button label='7' classStyle='btn' handleOnClick={inputNum} />
                <Button label='8' classStyle='btn' handleOnClick={inputNum} />
                <Button label='9' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='X'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 3 */}
                <Button label='4' classStyle='btn' handleOnClick={inputNum} />
                <Button label='5' classStyle='btn' handleOnClick={inputNum} />
                <Button label='6' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='+'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 4 */}
                <Button label='1' classStyle='btn' handleOnClick={inputNum} />
                <Button label='2' classStyle='btn' handleOnClick={inputNum} />
                <Button label='3' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='-'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 5 */}
                <Button
                    label='0'
                    classStyle='btn zero'
                    handleOnClick={inputNum}
                />
                <Button label='.' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='='
                    classStyle='btn orange'
                    handleOnClick={equals}
                />
            </div>
        </div>
    );
};

export default Calculator;
