import PropTypes from 'prop-types'; // Importar prop-types
import './Auth.css';

function Login({ setView }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión exitoso");
  };

  return (
    <>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
        </div>
        <button type="submit" className="button login">Entrar</button>
        <p>¿No tienes cuenta? <span onClick={() => setView('register')} className="link">Regístrate</span></p>
      </form>
    </>
  );
}

// Validación de tipos de propiedades
Login.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Login;
