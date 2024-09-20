import React, { useState, useEffect } from "react";
import "./styles/index.scss";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark", isDarkMode); 
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Main selectedTab={selectedTab} />
      <Navigation setSelectedTab={setSelectedTab} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
