import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [{ email, username }, setFormState] = useState({
        username: "brandon",
        email: "brandon@gmail.com",
    });

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((formState) => ({
            ...formState,
            [name]: value.toLowerCase(),
        }));
    };

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="exameple@email.com"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            {username === "brandon".toLowerCase() && <Message />}
        </>
    );
};
