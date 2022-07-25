import "./App.css";
import Caculator from "./Components/Calculator/Calculator";

function App() {
    return (
        <div className='App'>
            <div className='container'>
                <div className='wrapper'>
                    {/* Screen UI */}
                    <div className='screen'>
                        {input !== "" || input === "0" ? (
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
                </div>
            </div>
            <Caculator />
        </div>
    );
}

export default App;
