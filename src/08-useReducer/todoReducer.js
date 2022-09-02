export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "add todo":
            return [...state, action.payload];
        case "remove todo":
            return state.filter((todo) => todo.id !== action.payload);
        case "toggle todo":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
};
