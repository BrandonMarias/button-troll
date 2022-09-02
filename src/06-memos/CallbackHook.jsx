import { useCallback, useState } from "react";
import { Increment } from "./Increment";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const increment = useCallback((value) => {
        setCounter((prev) => prev + value)
    }, []);

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />

            <Increment increment={increment} />
        </>
    );
};
