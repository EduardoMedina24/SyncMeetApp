import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import TextLeft from './components/Carousel/TextLeft';
import TextRight from './components/Carousel/TextRight';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main style={{ height: 'calc(100vh - 80px)' }}>
        
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
        
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
