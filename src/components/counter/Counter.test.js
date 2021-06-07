import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "./Counter";

test("renders header correctly", () => {
    const { getByTestId } = render(<Counter />);
    const headerElem = getByTestId("header");

    expect(headerElem.textContent).toBe("My Counter");
});