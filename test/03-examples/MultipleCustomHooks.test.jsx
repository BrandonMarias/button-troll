import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks/";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("test on <MultipleCustomHooks />", () => {
    const increment = jest.fn();

    useCounter.mockReturnValue({
        count: 1,
        increment: increment,
        decrement: () => {},
        reset: () => {},
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    useFetch.mockReturnValue({
        data: null,
        loading: true,
        error: null,
    });
    test("should shoe the default component", () => {
        render(<MultipleCustomHooks />);
        expect(screen.getByText("Loading...")).toBeTruthy();
        expect(screen.getByText("Braking bad quotes")).toBeTruthy();
        const btnNext = screen.getByRole("button", { name: "Next quote" });
        const btnPrev = screen.getByRole("button", { name: "Previos Quote" });
        expect(btnNext.disabled).toBeTruthy();
        expect(btnPrev.disabled).toBeTruthy();
    });

    test("should show the quote", async () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: "Brandon",
                    quote: "Hello world",
                },
            ],
            loading: false,
            error: null,
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText("Hello world")).toBeTruthy();
        expect(screen.getByText("Brandon")).toBeTruthy();
        const btnNext = screen.getByRole("button", { name: "Next quote" });
        const btnPrev = screen.getByRole("button", { name: "Previos Quote" });
        expect(btnNext.disabled).toBeFalsy();
        expect(btnPrev.disabled).toBeTruthy();
    });

    test("should call increment", () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: "Brandon",
                    quote: "Hello world",
                },
            ],
            loading: false,
            error: null,
        });

        render(<MultipleCustomHooks />);
        const btnNext = screen.getByRole("button", { name: "Next quote" });
        fireEvent.click(btnNext);
        expect(increment).toHaveBeenCalled();
    });
});
