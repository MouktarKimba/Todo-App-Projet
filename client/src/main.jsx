// Fichier: client/src/main.jsx
// Point d'entrée de l'application React.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// NOUVEAU : Importation du CSS de Bootstrap pour styliser les composants.
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss'; // Importation de nos styles globaux personnalisés

// Rendu du composant principal "App" dans l'élément HTML avec l'ID "root".
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);