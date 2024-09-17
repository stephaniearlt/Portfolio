import React, { useState } from 'react';
import './styles/index.scss'; 

import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <div className="app">
      <Main selectedTab={selectedTab} />
      <Navigation setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default App;
