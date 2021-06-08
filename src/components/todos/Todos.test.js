import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

describe("Todos component", () => {
    test("loads todos properly if request succeeds", async () => {
        // Mock the browser's Fetch API with a fake func
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            async json() {
                return [
                    { userId: 1, id: 1, title: "Lorem Ipsum", completed: false },
                    { userId: 2, id: 2, title: "Hello World", completed: false }
                ];
            }
        });

        render(<Todos />);
        
        const todoItems = await screen.findAllByRole("article");
        expect(todoItems).not.toHaveLength(0);
    });
});