import { render, screen } from "@testing-library/react";
import { TodoApp, useTodo } from "../../src/08-useReducer";

jest.mock("../../src/08-useReducer/useTodo");

const todos = [
    { id: 1, desc: "Aprender React", done: false },
    { id: 2, desc: "Aprender Mongo", done: true },
];

describe("Test on <TodoApp />", () => {
    useTodo.mockReturnValue({
        todos,
        addTodo: jest.fn(),
        removeTodo: jest.fn(),
        toggleTodo: jest.fn(),
        todoCount: 2,
        undoneCount: 1,
    });

    test("should show the component correctly", () => {
        render(<TodoApp />);
        const spanTodos =screen.getAllByLabelText("span");
        expect(spanTodos[0].textContent).toContain("Aprender React")
        expect(spanTodos[1].textContent).toContain("Aprender Mongo")
    });
});
