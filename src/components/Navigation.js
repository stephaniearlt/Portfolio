import React from 'react';

function Navigation({ setSelectedTab }) {
  return (
    <footer>
      <button onClick={() => setSelectedTab('Home')}>Logo</button>
      <button onClick={() => setSelectedTab('Projets')}>Projets</button>
      <button onClick={() => setSelectedTab('Méthodologie')}>Méthodologie</button>
      <button onClick={() => setSelectedTab('A propos')}>A propos</button>
      <button onClick={() => setSelectedTab('Contact')}>Contact</button>
    </footer>
  );
}

export default Navigation;
