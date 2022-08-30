import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const increment = (value = 1) => setCount(count + value);
    const decrement = ( value = 1) => setCount(count - value);
    const reset = (value = initialValue) => setCount(value);
    return { count, increment, decrement, reset };
};
