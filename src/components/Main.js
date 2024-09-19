import React from "react";
import TextAnimator from "./TextAnimator";
import ProjectsPage from "./ProjectsPage";
import MethodologyPage from "./MethodologyPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function Main({ selectedTab }) {
  const isHomePage = selectedTab === "Home";

  const renderContent = () => {
    switch (selectedTab) {
      case "Projets":
        return <ProjectsPage />;
      case "Méthodologie":
        return <MethodologyPage />;
      case "A propos":
        return <AboutPage />;
      case "Contact":
        return <ContactPage />
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
