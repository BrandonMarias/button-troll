import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <h1>Login page</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 3)}</pre>
            <p>Login page content</p>
            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({ id: 1, name: "user", email: "la@googe.com" })
                }
            >
                Login
            </button>
        </>
    );
};
