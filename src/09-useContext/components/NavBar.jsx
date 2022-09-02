import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const activeLink = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand h1" to="/">
                    useContext
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink className={activeLink} to="/">
                            Home
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
