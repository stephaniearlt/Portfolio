import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Methodologie from "./pages/Methodologie";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark" : ""}`}>
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/methodologie" element={<Methodologie />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
          
          <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      </div>
    </Router>
  );
};

export default App;
