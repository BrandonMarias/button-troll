import { useEffect, useReducer } from "react";
import { initialState, todoReducer, init } from "./";

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        dispatch({ type: "remove todo", payload: id });
    };

    const addTodo = (todo) => {
        if (todos.find((t) => t.desc === todo.desc)) return;
        dispatch({ type: "add todo", payload: todo });
    };

    const toggleTodo = (id) => {
        dispatch({ type: "toggle todo", payload: id });
    };

    const todoCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    const undoneCount = todoCount - doneCount;

    return {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        todoCount,
        doneCount,
        undoneCount,
    };
};
