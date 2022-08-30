import React, { useState } from "react";

export const CounterApp = () => {
    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    });

    const increment = () => {
        setCounter((counter) => ({...counter, counter1: counter1 + 1}));
    };

    return (
        <>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>
            <h1>Counter3: {counter3}</h1>

            <hr></hr>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>
        </>
    );
};
