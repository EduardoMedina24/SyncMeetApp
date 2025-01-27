import { useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import TextLeft from './components/Carousel/TextLeft';
import TextRight from './components/Carousel/TextRight';
import Login from './components/Auth/Login';  // Importar Login
import Register from './components/Auth/Register';  // Importar Register
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState('home');  // Estado para manejar la vista actual

  return (
    <>
      {/* Navbar */}
      <Navbar setView={setView} />  {/* Pasamos setView a Navbar */}

      {/* Main content */}
      <main style={{ height: 'calc(100vh - 80px)' }}>
        {view === 'home' && (
          <div className="carousel-wrapper">
            {/* Textos en los lados */}
            <TextLeft currentIndex={currentIndex} />
            
            <div className="carousel">
              <h3>Bienvenido a SyncMeet</h3>
              <p>Plataforma para programar y gestionar reuniones.</p>
              <Carousel setCurrentIndex={setCurrentIndex} />
            </div>
            
            <TextRight currentIndex={currentIndex} />
          </div>
        )}

        {view === 'login' && <Login setView={setView} />}
        {view === 'register' && <Register setView={setView} />}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

// Validación de las propiedades
App.propTypes = {
  setView: PropTypes.func.isRequired, // Validamos que setView sea una función obligatoria
};

export default App;
