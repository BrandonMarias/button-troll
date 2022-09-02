import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import { BrowserRouter } from "react-router-dom";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { Options } from "./02-useEffect/Options";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { ButtonTroll } from "./02-useEffect/ButtonTroll";
// import { Layout } from "./05-useLayauotEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { App } from "./09-useContext/App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
);
