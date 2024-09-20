import React from 'react';
import DarkMode from './DarkMode';

function Navigation({ setSelectedTab, isDarkMode, toggleDarkMode }) {
  return (
    <footer>
      <button onClick={() => setSelectedTab('Home')} className="logo-button">
        <img src={`${process.env.PUBLIC_URL}/images/developpeur.webp`} alt="Logo, Stéphanie Arlt, développeuse web." className="logo" />
      </button>
      <div className="nav-buttons">
        <button onClick={() => setSelectedTab('Projets')}>Projets</button>
        <button onClick={() => setSelectedTab('Méthodologie')}>Méthodologie</button>
        <button onClick={() => setSelectedTab('A propos')}>A propos</button>
        <button onClick={() => setSelectedTab('Contact')}>Contact</button>
      </div>
      <div className="dark-mode-switch">
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </footer>
  );
}

export default Navigation;
