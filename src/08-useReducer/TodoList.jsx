import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    i={i}
                    onRemoveTodo={onRemoveTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
};
