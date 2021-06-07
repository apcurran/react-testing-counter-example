import { useState } from "react";

import "./Counter.css";

function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    function addToCounter() {
        setCounterValue((prevVal) => prevVal + inputValue);
    }

    function subtractFromCounter() {
        setCounterValue((prevVal) => prevVal - inputValue);
    }

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter">{counterValue}</h2>
            <button
                onClick={subtractFromCounter}
                data-testid="subtract-btn"
            >-</button>
            <input
                onChange={(event) => setInputValue(event.target.value)}
                data-testid="input"
                className="input"
                value={inputValue}
                type="number"
                name="input"
                id="input"
            />
            <button
                onClick={addToCounter}
                data-testid="add-btn"
            >+</button>
        </div>
    );
}

export default Counter;
