import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const activeLink = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;
    const buttonToggle = useRef()
    const desactiveToggle = () => {
        buttonToggle.current.click()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand h1" to="/">
                    useContext
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    ref={buttonToggle}
                    
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav" onClick={desactiveToggle}>
                        <NavLink className={activeLink} to="/">
                            Home
                        </NavLink>
                        <NavLink className={activeLink} to="/button-troll">
                            Button Troll
                        </NavLink>
                        <NavLink className={activeLink} to="/todo">
                            Todo App
                        </NavLink>
                        <NavLink className={activeLink} to="/memes">
                            Meme Generator
                        </NavLink>
                        <NavLink className={activeLink} to="/about">
                            About
                        </NavLink>
                        <NavLink className={activeLink} to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
