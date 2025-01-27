import PropTypes from 'prop-types'; // Importar prop-types
import './Auth.css';
import TextLeft from '../Carousel/TextLeft';
import TextRight from '../Carousel/TextRight';
import { useState, useEffect } from 'react';

function Register({ setView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registro exitoso");
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
    <div className="auth-container register-container">
      {/* Textos a la izquierda */}
      <TextLeft currentIndex={currentIndex} />

      {/* Formulario de Registro centrado */}
      <div className="form-container">
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
      </div>

      {/* Textos a la derecha */}
      <TextRight currentIndex={currentIndex} />
    </div>
  );
}

Register.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Register;
