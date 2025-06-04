import { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css"

function Navbar() {
    const [logoHover, setLogoHover] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary h-100">
            <div className="container align-items-center p-0 m-0">
                <Link className="navbar-brand d-flex align-items-center fw-bold fs-2" onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} to="/">
                    <img className="logo-img" src={logoHover ? '/ivrit-high-resolution-shadow-logo.svg' : '/ivrit-high-resolution-white-logo.svg'} alt="לוגו" />
                    <span className="lift-text"> Ivrit </span>
                </Link>
                <ul className="navbar-nav d-flex align-items-center ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold fs-5 nav-link-custom" to="/docs">
                            <span className="lift-text"> מדריך </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold fs-5 nav-link-custom" to="/editor"> 
                            <span className="lift-text"> עורך </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold fs-5 nav-link-custom" to="/download"> 
                            <span className="lift-text"> הורדה </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;