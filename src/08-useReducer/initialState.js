export const initialState = [];

export const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || initialState;
}
