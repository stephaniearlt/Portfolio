import React, { useEffect } from "react";

// Définition des propriétés
interface FocusHandlerProps {
  children: React.ReactNode; 
  navLinkSelector: string; 
}

// Composant fonctionnel
const FocusHandler: React.FC<FocusHandlerProps> = ({
  children,
  navLinkSelector,
}) => {
  // Hook pour gérer le focus et les événements clavier
  useEffect(() => {
    // Focalise le conteneur principal au chargement
    const mainContainer = document.getElementById("main-container");
    if (mainContainer) {
      mainContainer.focus();
    }

    // Fonction pour gérer le cycle de tabulation
    const handleTabCycle = (event: KeyboardEvent) => {
      // Sélectionne tous les éléments focusables dans le conteneur principal
      const focusableElements = document.querySelectorAll(
        "#main-container a, #main-container button"
      ) as NodeListOf<HTMLElement>;
      const lastElement = focusableElements[focusableElements.length - 1];

      // Vérifie si la touche Tab est pressée et si le dernier élément est actif
      if (
        event.key === "Tab" &&
        document.activeElement === lastElement &&
        !event.shiftKey
      ) {
        // Prévenir le comportement par défaut de la touche Tab
        event.preventDefault();
        // Focalise le lien de navigation spécifié
        const navLink = document.querySelector(navLinkSelector) as HTMLAnchorElement;
        if (navLink) {
          navLink.focus();
        }
      }
    };

    // Fonction pour gérer l'appui sur la touche Échap
    const handleEscape = (event: KeyboardEvent) => {
      // Vérifie si la touche Échap est pressée
      if (event.key === "Escape") {
        // Focalise le lien de navigation vers la page d'accueil
        const homeNavLink = document.querySelector('nav a[href="/"]') as HTMLAnchorElement;
        if (homeNavLink) {
          homeNavLink.focus();
        }
      }
    };

    // Ajoute les gestionnaires d'événements pour les touches
    document.addEventListener("keydown", handleTabCycle);
    document.addEventListener("keydown", handleEscape);

    // Nettoyage des gestionnaires d'événements lors du démontage du composant
    return () => {
      document.removeEventListener("keydown", handleTabCycle);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [navLinkSelector]);

  // Rendu du composant avec un conteneur principal qui peut être focalisé
  return (
    <div className="main-container" id="main-container" tabIndex={0}>
      {children} {/* Rendu des enfants passés au composant */}
    </div>
  );
};

export default FocusHandler;
