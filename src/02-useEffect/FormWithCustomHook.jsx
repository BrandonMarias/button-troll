import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { username, password, email, handleChange, resetForm} = useForm({
        username: "",
        email: "",
        password: "",
    });


    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="exameple@email.com"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleChange}
            />

            <button className="btn btn-primary" onClick={resetForm}>Borrar</button>
        </>
    );
};
