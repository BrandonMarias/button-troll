import { HomePage, LoginPage, AboutPage } from "./";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";

export const App = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="*" element={<h1>404 - Not found</h1>} /> */}
                <Route path="*" element={<Navigate to={"about"} />} />
            </Routes>
        </UserProvider>
    );
};
