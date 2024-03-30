import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(false);
    }, [location]);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <BootstrapNavbar expanded={expanded} expand="false" variant="light" className="px-4 mobile-nav">
            <BootstrapNavbar.Brand as={NavLink} to="/">
                <img src="/logo.svg" alt="logo" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle onClick={handleToggle} aria-controls="navbar-nav" />
            <BootstrapNavbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" className="link">
                        home
                    </NavLink>
                    <NavLink to="/portfolio" className="link">
                        portfolio
                    </NavLink>
                    <NavLink to="/about" className="link">
                        about
                    </NavLink>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
