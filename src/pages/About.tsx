import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faPhp,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

// Définition d'une interface pour les compétences techniques
interface TechIcon {
  icon: any;
  label: string;
}

const About: React.FC = () => {
  const techIcons: TechIcon[] = [
    { icon: faHtml5, label: "HTML5" },
    { icon: faCss3Alt, label: "CSS3" },
    { icon: faJs, label: "JavaScript" },
    { icon: faPhp, label: "PHP" },
    { icon: faReact, label: "React" },
    { icon: faNodeJs, label: "Node.js" },
  ];

  return (
    <main className="about-container" role="main">
      <h1>À propos</h1>
      <p className="intro">
        Bonjour, je suis Stéphanie Arlt, passionnée de technologie et fervente
        croyante dans son pouvoir de transformer positivement notre monde.
        Spécialisée dans le développement informatique éco-conçu et accessible,
        je m'engage à transformer vos idées en applications web performantes,
        innovantes et responsables, avec une attention particulière aux aspects
        environnementaux et humains.
        <br />
        <br />
        En tant que développeuse web, je crée des applications réactives avec
        React et Redux et intègre des technologies back-end comme Node.js,
        Express et MongoDB. Mon expertise couvre tous les aspects du
        développement web, de l'interface utilisateur au back-end.
      </p>

      <section className="about-sections">
        <article className="about-block">
          <h2>Parcours Professionnel</h2>
          <p>
            Mon parcours atypique m'a conduite du métier de comptable à celui de
            développeuse web. Depuis 2018, j'ai enrichi mon expérience en
            marketing digital et en SEO, et me suis réorientée vers le{" "}
            <a
              href="https://openclassrooms.com/fr/paths/900-integrateur-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              développement orienté utilisateur
            </a>{" "}
            grâce au Design Thinking. Cette transition m'a permis de comprendre
            en profondeur les besoins des utilisateurs et les dynamiques du
            marché numérique.
          </p>
        </article>

        <article className="about-block">
          <h2>Compétences Techniques</h2>
          <p>
            Je maîtrise la gestion de projets web dynamiques de A à Z, utilisant
            HTML, CSS, JavaScript, et PHP. Certifiée en{" "}
            <a
              href="https://wpchef.fr/wordpress/"
              target="_blank"
              rel="noopener noreferrer"
            >
              conception WordPress
            </a>
            , je crée des interfaces numériques performantes et flexibles. Mon
            expertise technique me permet de proposer des solutions sur mesure
            qui allient efficacité et adaptabilité.
          </p>
          <div className="tech-icons">
            {techIcons.map(({ icon, label }) => (
              <span key={label} className="tech-icon" aria-hidden="true">
                <FontAwesomeIcon icon={icon} size="2x" title={label} />
                <span className="visually-hidden">{label}</span>
              </span>
            ))}
          </div>
        </article>

        <article className="about-block">
          <h2>Engagement Éthique</h2>
          <p>
            Mon engagement envers l'accessibilité et la qualité web est renforcé
            par une{" "}
            <a
              href="https://formations.access42.net/formations/formation-developpement-accessible/"
              target="_blank"
              rel="noopener noreferrer"
            >
              formation spécialisée avec Access42
            </a>{" "}
            et une utilisation quotidienne des meilleures pratiques du livre
            "Les 240 règles d'Opquast". Je m'efforce d'intégrer des pratiques
            durables dans chaque projet, avec une prochaine étape : valider mes
            compétences en éco-conception avec GreenIt.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
