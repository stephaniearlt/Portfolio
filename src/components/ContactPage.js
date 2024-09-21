import React from "react";

const reason1 = "/images/ensemble.webp";
const reason2 = "/images/idee.webp";
const reason3 = "/images/progression.webp";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Me contacter</h1>
      <p className="intro">
        La meilleure façon de me contacter est d’écrire à{" "}
        <a href="mailto:contact@stephaniearlt.fr">contact@stephaniearlt.fr</a>.
        Je lis tous les messages et m’efforce d’y répondre sous trois jours
        ouvrés.
      </p>
      <div className="contact-sections">
        <div className="reason">
          <img
            src={reason1}
            className="reason-image"
            alt=""
            aria-hidden="true"
          />
          <h2>Réalisons ensemble vos projets sur mesure</h2>
          <p>
            Chaque projet est unique et mérite toute notre attention. Ensemble,
            nous créerons des solutions sur mesure, adaptées à vos besoins et
            vos objectifs spécifiques, pour un résultat parfaitement aligné.
          </p>
        </div>
        <div className="reason">
          <img
            src={reason2}
            className="reason-image"
            alt=""
            aria-hidden="true"
          />
          <h2>Chaque idée mérite un soin particulier</h2>
          <p>
            Vos idées sont précieuses, et en tant que développeuse, je m'assure
            de transformer chaque concept en une réalité fonctionnelle et
            impactante, tout en restant fidèle à votre vision.
          </p>
        </div>
        <div className="reason">
          <img
            src={reason3}
            className="reason-image"
            alt=""
            aria-hidden="true"
          />
          <h2>Créons une solution différenciante</h2>
          <p>
            Avec un design innovant et une approche axée sur les performances,
            je vous aiderai à créer des solutions web qui se démarquent et
            apportent une réelle valeur ajoutée à votre projet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
