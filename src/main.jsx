// Importerar kärnbiblioteket React som behövs för JSX.
import React from 'react';
// Hämtar den moderna renderaren som låter oss skapa en React-rot.
import ReactDOM from 'react-dom/client';
// Tar in huvudkomponenten för applikationen.
import App from './App.jsx';
// Laddar in de globala stilarna för projektet.
import './index.css';

// Startar React-applikationen genom att rendera App i DOM-elementet med id "root".
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode aktiverar extra kontroller för att hitta vanliga misstag under utveckling.
  <React.StrictMode>
    {/* Själva applikationen som definierar gränssnittet. */}
    <App />
  </React.StrictMode>,
);
