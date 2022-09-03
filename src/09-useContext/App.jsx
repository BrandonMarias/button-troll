import { HomePage, LoginPage, AboutPage } from "./";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";
import { Options } from "../02-useEffect/Options";
import { TodoApp } from "../08-useReducer";
import { MemeGenerator } from "../MemeGenerator";

export const App = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/button-troll" element={<Options/>} />
                <Route path="/todo" element={<TodoApp/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/memes" element={<MemeGenerator />} />
                {/* <Route path="*" element={<h1>404 - Not found</h1>} /> */}
                <Route path="*" element={<Navigate to={"about"} />} />
            </Routes>
        </UserProvider>
    );
};
