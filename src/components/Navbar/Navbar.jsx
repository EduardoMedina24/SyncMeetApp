import PropTypes from 'prop-types'; // Importar PropTypes
import './Navbar.css'; // Estilos específicos para el Navbar

function Navbar({ setView }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>SyncMeet</h1> {/* Aquí puede ir el logo de la app */}
      </div>
      <ul className="navbar-menu">
        <li><a href="#" onClick={() => setView('login')}>Login</a></li>
        <li><a href="#" onClick={() => setView('register')}>Registro</a></li>
        <li> </li>
      </ul>
    </nav>
  );
}

// Validación de las propiedades
Navbar.propTypes = {
  setView: PropTypes.func.isRequired, // Validamos que setView sea una función obligatoria
};

export default Navbar;
