import React from 'react';

const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="switch" onClick={toggleDarkMode}>
      <div className={`btn ${isDarkMode ? 'btn-change' : ''}`}>
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} ${isDarkMode ? 'icone-change' : ''}`}></i>
      </div>
    </div>
  );
};

export default DarkMode;
