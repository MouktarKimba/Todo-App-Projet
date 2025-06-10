// Fichier: client/src/App.jsx

import React from 'react';
import { CarteTaches } from './components/CarteTaches';

// On définit les URLs directement comme des constantes.
const imageUrl = 'https://images.unsplash.com/photo-1686934674798-2e390dc94019?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8';
const videoUrl = 'https://videos.pexels.com/video-files/4782135/4782135-hd_1920_1080_25fps.mp4';

// Le composant pour le fond vidéo
function VideoBackground() {
  return (
    <div className="video-background">
      {/* CORRECTION : playsinline est devenu playsInline */}
      <video autoPlay muted loop playsInline src={videoUrl}>
        Votre navigateur ne supporte pas les vidéos.
      </video>
    </div>
  );
}

function App() {
  return (
    <div>
      <VideoBackground />
      
      {/* On applique l'image de fond via un style inline en utilisant notre constante */}
      <header className="app-header" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h1>Gestionnaire de Tâches</h1>
      </header>
      
      <main className="main-content">
        <CarteTaches />
      </main>
    </div>
  );
}

export default App;