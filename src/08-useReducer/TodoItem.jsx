import PropTypes from "prop-types";
export const TodoItem = ({ todo, i, onRemoveTodo, onToggleTodo }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
            onClick={() => onToggleTodo(todo.id)}
        >
            <span
                className={`align-self-center ${
                    todo.done ? "text-decoration-line-through" : ""
                }`}
            >
                {i + 1}. {todo.desc}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onRemoveTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
};
