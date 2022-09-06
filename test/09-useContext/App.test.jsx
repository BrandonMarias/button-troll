import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../src/09-useContext";

describe("test on <App />", () => {
    test("should show the home page", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByRole("heading").textContent).toBe("Home page ");
    });

    test("should show the login page", () => {
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByRole("heading").textContent).toBe("Login page");
    });
});
