import { useState } from "react"
import {useCounter} from "../hooks"
import { Small } from "./Small"
export const Memorize = () => {
    const {count, increment} = useCounter( 10 )
    const [show, setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small value={count}/></h1>
        <hr />

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-danger" onClick={() => setShow(!show)}>
            Toggle {show ? "Hide" : "Show"}
        </button>

    
    </>
  )
}
