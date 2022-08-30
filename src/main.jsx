import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import "./css/main.css";
import { CounterWhitCustomHook } from "./01-useState/CounterWhitCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { Options } from "./02-useEffect/Options";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Options/>
    </React.StrictMode>
);
