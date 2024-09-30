import React, { useEffect, useState } from "react";
import FocusHandler from "../components/FocusHandler";

const reason1 = "/images/ensemble.webp";
const reason2 = "/images/idee.webp";
const reason3 = "/images/progression.webp";

const Contact: React.FC = () => {

const [email, setEmail] = useState("");

useEffect(() => {
    // Obfuscation de l'email avec un encodage simple par Base64
    const encodedEmail = "Y29udGFjdEBzdGVwaGFuaWVhcmx0LmZy"; 
    const decodedEmail = atob(encodedEmail); 
    setEmail(decodedEmail);
  }, []);

  return (
    <FocusHandler navLinkSelector='nav a[href="/contact"]'>
      <main className="contact-container" role="main">
        <h1>Me contacter</h1>
        <p className="intro">
          Ce site a été entièrement réalisé par mes soins, de la conception
          graphique au développement, avec les technologies React et TypeScript.
          J'ai également veiller à respecter les bonnes pratiques en matière
          d'accessibilité web.
          <br />
          <br />
          S'il vous a plu et que vous avez un projet en
          réflexion, n'hésitez pas à m'écrire à{" "}
          <a
            href={`mailto:${email}`}
            className="link"
            rel="noopener noreferrer"
          >
            {email || "loading..."}
          </a>
          . Je lis tous les messages et m’efforce d’y répondre sous trois jours
          ouvrés. Pour découvrir l'ensemble de mes prestations (ou les mentions
          légales), je vous invite à visiter mon site :{" "}
          <a href="https://stephaniearlt.fr" className="link" target="_blank" rel="noopener noreferrer">
            stephaniearlt.fr
          </a>
          .
        </p>

        <section className="contact-sections">
          <article className="reason">
            <img
              src={reason1}
              className="reason-image"
              alt=""
              aria-hidden="true"
              width="150"
              height="150"
            />
            <h2>Réalisons ensemble vos projets sur mesure</h2>
            <p>
              Chaque projet est unique et mérite toute notre attention.
              Ensemble, nous créerons des solutions sur mesure, adaptées à vos
              besoins et objectifs spécifiques, pour un résultat parfaitement
              aligné.
            </p>
          </article>
          <article className="reason">
            <img
              src={reason2}
              className="reason-image"
              alt=""
              aria-hidden="true"
              width="150"
              height="150"
            />
            <h2>Chaque idée mérite un soin particulier</h2>
            <p>
              Vos idées sont précieuses, et en tant que développeuse, je
              m'assure de transformer chaque concept en une réalité
              fonctionnelle et impactante, tout en restant fidèle à votre
              vision.
            </p>
          </article>
          <article className="reason">
            <img
              src={reason3}
              className="reason-image"
              alt=""
              aria-hidden="true"
              width="150"
              height="150"
            />
            <h2>Créons une solution différenciante</h2>
            <p>
              Avec un design innovant et une approche axée sur les performances,
              je vous aiderai à créer des solutions web qui se démarquent et
              apportent une réelle valeur ajoutée à votre projet.
            </p>
          </article>
        </section>
      </main>
    </FocusHandler>
  );
};

export default Contact;
