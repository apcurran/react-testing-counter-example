import { useState } from "react";

import "./Counter.css";

function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    // Clr Change Classes
    const clrChangeGreen = `${counterValue >= 100 ? "clr--green" : ""}`;
    const clrChangeRed = `${counterValue <= -100 ? "clr--red" : ""}`;

    function addToCounter() {
        setCounterValue((prevVal) => prevVal + inputValue);
    }

    function subtractFromCounter() {
        setCounterValue((prevVal) => prevVal - inputValue);
    }

    return (
        <div className="counter-section">
            <h1 data-testid="header">My Counter</h1>
            <h2
                className={`${clrChangeGreen}${clrChangeRed}`}
                data-testid="counter"
                data-cy="counter"
            >{counterValue}</h2>
            <button
                onClick={subtractFromCounter}
                data-testid="subtract-btn"
            >-</button>
            <input
                onChange={(event) => setInputValue(Number(event.target.value))}
                data-cy="input"
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
