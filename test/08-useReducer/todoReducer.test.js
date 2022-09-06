import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("test on todoReducer", () => {
    const demoTodos = [
        {
            id: 1,
            desc: "Aprender React",
            done: false,
        },
        {
            id: 2,
            desc: "Aprender Mongo",
            done: false,
        },
    ];

    test("should return default state", () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toBe(demoTodos);
    });

    test("should add a todo", () => {
        const newTodo = {
            id: 3,
            desc: "Aprender Express",
            done: false,
        };
        const action = {
            type: "add todo",
            payload: newTodo,
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test("should remove a todo", () => {
        const action = {
            type: "remove todo",
            payload: 1,
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]])
    });

    test("should toggle a todo", () => {
        const action = {
            type: "toggle todo",
            payload: 1,
        }
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
        const state2 = todoReducer(state, action);
        expect(state2[0].done).toBe(false);
        expect(state2.length).toBe(demoTodos.length);
    });
});
