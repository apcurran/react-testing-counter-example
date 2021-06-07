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