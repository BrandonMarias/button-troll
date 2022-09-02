import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const increment = (value = 1) => setCount( (prevCount) => prevCount + value ); 
    const decrement = ( value = 1) => setCount( (prevCount) => prevCount - value );
    const reset = () => setCount(initialValue);
    return { count, increment, decrement, reset };
};
