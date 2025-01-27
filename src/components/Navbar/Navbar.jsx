
// src/components/Navbar.jsx

import './Navbar.css'; // Estilos específicos para el Navbar

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>SyncMeet</h1> {/* Aquí puede ir el logo de la app */}
            </div>
            <ul className="navbar-menu">
                <li><a href="#login">Login</a></li>
                <li><a href="#register">Registro</a></li>
                <li> </li>
            </ul>
        </nav>
    );
}

export default Navbar;
