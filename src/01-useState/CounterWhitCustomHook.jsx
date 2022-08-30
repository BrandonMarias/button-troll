import { useCounter } from "../hooks/useCounter"


export const CounterWhitCustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(0)

  return (
    <>
    
    <h1>Counter Whit CustomHook: {count}</h1>

    <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
    <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
    <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    
    </>
  )
}
