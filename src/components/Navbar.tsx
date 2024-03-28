import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar d-flex">
            <NavLink to="/" end className="me-auto">
                <img src="/logo.svg" alt="logo" width="170" />
            </NavLink>

            <NavLink to="/" end className="nav-link">
                home
            </NavLink>
            <NavLink to="/portfolio" end className="nav-link">
                portfolio
            </NavLink>
            <NavLink to="/about" end className="nav-link">
                about
            </NavLink>
        </nav>
    );
};

export default Navbar;
