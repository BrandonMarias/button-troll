import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("test on <TodoItem />", () => {
    const todo = {
        id: 1,
        desc: "Aprender React",
        done: false,
    };

    const onToggleTodoMock = jest.fn();
    const onRemoveTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test("should show the todo correctly", () => {
        render(
            <TodoItem
                i={1}
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const span = screen.getByLabelText("span");
        expect(span.className).toBe("align-self-center ");
        expect(span.className).not.toContain("text-decoration-line-through");
        expect(span.textContent).toBe("2. Aprender React");
    });

    test("should call onToggleTodo", () => {
        render(
            <TodoItem
                i={1}
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const span = screen.getByLabelText("span");
        fireEvent.click(span);

        expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test("should call onRemoveTodo", () => {
        render(
            <TodoItem
                i={1}
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const button = screen.getByText("Borrar");
        fireEvent.click(button);

        expect(onRemoveTodoMock).toHaveBeenCalledTimes(1);
        expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test("should show the todo correctly when done", () => {
        const todo = {
            id: 1,
            desc: "Aprender React",
            done: true,
        };

        render(
            <TodoItem
                i={1}
                todo={todo}
                onRemoveTodo={onRemoveTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const span = screen.getByLabelText("span");
        expect(span.className).toBe("align-self-center text-decoration-line-through");
        expect(span.textContent).toBe("2. Aprender React");
    });
});
