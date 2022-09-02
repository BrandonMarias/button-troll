import { useState, useMemo } from "react";
import { useCounter } from "../hooks";

const haveStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("haveStuff");
    }
    return `${iterationNumber} iterations`;
};

export const MemoHook = () => {
    const { count, increment } = useCounter(500);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => haveStuff(count), [count]);

    return (
        <>
            <h1>
                Counter: <small>{count}</small>
            </h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button className="btn btn-primary" onClick={() => increment()}>
                +1
            </button>

            <button className="btn btn-danger" onClick={() => setShow(!show)}>
                Toggle {show ? "Hide" : "Show"}
            </button>
        </>
    );
};
