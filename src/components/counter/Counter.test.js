import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "./Counter";

test("renders header correctly", () => {
    const { getByTestId } = render(<Counter />);
    const headerElem = getByTestId("header");

    expect(headerElem.textContent).toBe("My Counter");
});

test("counter initially starts with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterElem = getByTestId("counter");

    expect(counterElem.textContent).toBe("0");
});

test("input contains an inital value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputElem = getByTestId("input");

    expect(inputElem.value).toBe("1");
});

test("add button renders with a +", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnElem = getByTestId("add-btn");

    expect(addBtnElem.textContent).toBe("+");
});

test("subtract button renders with a -", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnElem = getByTestId("subtract-btn");

    expect(subtractBtnElem.textContent).toBe("-");
});

test("changing value of input works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const inputElem = getByTestId("input");

    expect(inputElem.value).toBe("1");

    // Simulate changing the value of the input to "5"
    fireEvent.change(inputElem, {
        target: {
            value: "5"
        }
    });

    expect(inputElem.value).toBe("5");
});

test("clicking on the plus button adds 1 to the counter", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnElem = getByTestId("add-btn");
    const counterElem = getByTestId("counter");

    expect(counterElem.textContent).toBe("0");

    fireEvent.click(addBtnElem);

    expect(counterElem.textContent).toBe("1");
});

test("clicking on the subtract button subtracts 1 from the counter", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnElem = getByTestId("subtract-btn");
    const counterElem = getByTestId("counter");

    // Initial counter value
    expect(counterElem.textContent).toBe("0");

    fireEvent.click(subtractBtnElem);

    // Value after clicking
    expect(counterElem.textContent).toBe("-1");
});

test("changing input value, then clicking on add button works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnElem = getByTestId("add-btn");
    const counterElem = getByTestId("counter");
    const inputElem = getByTestId("input");

    fireEvent.change(inputElem, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtnElem);

    expect(counterElem.textContent).toBe("5");
});

test("changing input value, then clicking on subtract button works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnElem = getByTestId("subtract-btn");
    const counterElem = getByTestId("counter");
    const inputElem = getByTestId("input");

    fireEvent.change(inputElem, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(subtractBtnElem);

    expect(counterElem.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnElem = getByTestId("add-btn");
    const subtractBtnElem = getByTestId("subtract-btn");
    const counterElem = getByTestId("counter");
    const inputElem = getByTestId("input");

    fireEvent.change(inputElem, {
        target: {
            value: "10"
        }
    });

    fireEvent.click(addBtnElem);
    fireEvent.click(addBtnElem);
    fireEvent.click(addBtnElem);
    fireEvent.click(addBtnElem);
    fireEvent.click(subtractBtnElem);
    fireEvent.click(subtractBtnElem);

    expect(counterElem.textContent).toBe("20");

    fireEvent.change(inputElem, {
        target: {
            value: "5"
        }
    });

    fireEvent.click(addBtnElem);
    fireEvent.click(subtractBtnElem);
    fireEvent.click(subtractBtnElem);

    expect("15");
});