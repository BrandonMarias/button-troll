import { TodoAdd, TodoList, useTodo } from "./";

export const TodoApp = () => {
    const { todos, addTodo, removeTodo, toggleTodo, todoCount, undoneCount } =
        useTodo();

    return (
        <>
            <h1>
                TodoApp: {todoCount}, <small>Pending: {undoneCount}</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-md-7">
                    <TodoList
                        todos={todos}
                        onRemoveTodo={removeTodo}
                        onToggleTodo={toggleTodo}
                    />
                </div>
                <div className="col-md-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd addNewTodo={addTodo} />
                </div>
            </div>
        </>
    );
};
