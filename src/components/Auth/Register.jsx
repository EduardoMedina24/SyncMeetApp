import PropTypes from 'prop-types'; // Importar prop-types

import './Auth.css';

function Register({ setView }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registro exitoso");
  };

  return (
    <>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" placeholder="Ingresa tu nombre" required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Crea una contraseña" required />
        </div>
        <button type="submit" className="button register">Registrar</button>
        <p>¿Ya tienes cuenta? <span onClick={() => setView('login')} className="link">Inicia sesión</span></p>
      </form>
    </>
  );
}

// Validación de tipos de propiedades
Register.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Register;
