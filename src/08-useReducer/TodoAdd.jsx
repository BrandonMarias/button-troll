import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addNewTodo }) => {
    const {desc,handleChange,resetForm} = useForm({ desc: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc.trim().length <= 1) return;
        addNewTodo({ id: new Date().getTime(), desc, done: false });
        resetForm();
    };

    return (
        <form>
            <input
                type="text"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                name="desc"
                value={desc}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary m-0 mt-2 btn-block"
                onClick={handleSubmit}
            >
                Agregar
            </button>
        </form>
    );
};

TodoAdd.propTypes = { addNewTodo: PropTypes.func.isRequired };
