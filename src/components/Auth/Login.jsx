import PropTypes from 'prop-types';
import './Auth.css';
import TextLeft from '../Carousel/TextLeft';
import TextRight from '../Carousel/TextRight';
import { useState, useEffect } from 'react';

function Login({ setView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión exitoso");
  };

  // Cambiar el índice automáticamente cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cambia al siguiente índice
    }, 3000); // Cada 3 segundos (3000ms)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="auth-container ">
      {/* Textos a la izquierda */}
      <TextLeft currentIndex={currentIndex} />

      {/* Formulario de Login centrado */}
      <div className="form-container">
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
      </div>

      {/* Textos a la derecha */}
      <TextRight currentIndex={currentIndex} />
    </div>
  );
}

Login.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Login;
