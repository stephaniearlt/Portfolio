import React from "react";
import TextAnimator from "./TextAnimator";
import ProjectsPage from "./ProjectsPage";
import MethodologyPage from "./MethodologyPage";

function Main({ selectedTab }) {
  const isHomePage = selectedTab === "Home";

  const renderContent = () => {
    switch (selectedTab) {
      case "Projets":
        return <ProjectsPage />;
      case "Méthodologie":
        return <MethodologyPage />;
      case "A propos":
        return <div>Contenu pour À Propos</div>;
      case "Contact":
        return <div>Contenu pour Contact</div>;
      default:
        return <TextAnimator />;
    }
  };

  return (
    <main className={isHomePage ? "main-centered" : "main-default"}>
      {renderContent()}
    </main>
  );
}

export default Main;
