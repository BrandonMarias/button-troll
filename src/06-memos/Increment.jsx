import React from "react";
import { memo } from "react"; 

export const Increment = memo (({ increment }) => {
    console.log("Increment rendered :(");
    return (
        <button className="btn btn-primary" onClick={() => increment(5)}>
            +1
        </button>
    );
}
)