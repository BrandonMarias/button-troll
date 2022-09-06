import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("test on <LoginPage />", () => {
    test("should render the components without the user", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        expect(screen.getByLabelText("pre").textContent).toBe("null");
    });

    test("should render the components with the user", () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({
            id: 1,
            name: "user",
            email: "la@googe.com",
        });
    });
});
