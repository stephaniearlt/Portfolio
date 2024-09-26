import React from "react";
import TextAnimator from "../components/TextAnimator";
import SocialMedia from "../components/SocialMedia";

const Home: React.FC = () => {
  return (
    <main role="main">
      {/* Lien accessible au clavier mais masqué visuellement */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <section className="main-centered">
        <TextAnimator />
        <SocialMedia />
      </section>
    </main>
  );
};

export default Home;
