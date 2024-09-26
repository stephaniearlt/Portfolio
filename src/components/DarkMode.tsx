import React from "react";

interface DarkModeProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Désactiver le mode sombre" : "Activer le mode sombre"}
      className="btn-dark-mode"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkMode;
