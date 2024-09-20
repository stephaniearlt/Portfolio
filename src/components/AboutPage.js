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

const AboutPage = () => {
  return (
    <div className="about-container">
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

      <div className="about-sections">
        <div className="about-block">
          <h2>Parcours Professionnel</h2>
          <p>
            Mon parcours atypique m'a conduite du métier de comptable à celui de
            développeuse web. Depuis 2018, j'ai enrichi mon expérience en
            marketing digital et en SEO, et me suis réorientée vers le
            développement orienté utilisateur grâce au Design Thinking. Cette
            transition m'a permis de comprendre en profondeur les besoins des
            utilisateurs et les dynamiques du marché numérique.
          </p>
        </div>

        <div className="about-block">
          <h2>Compétences Techniques</h2>
          <p>
            Je maîtrise la gestion de projets web dynamiques de A à Z, utilisant
            HTML, CSS, JavaScript, et PHP. Certifiée en conception WordPress, je
            crée des interfaces numériques performantes et flexibles. Mon
            expertise technique me permet de proposer des solutions sur mesure
            qui allient efficacité et adaptabilité.
          </p>
          <div className="tech-icons">
            <div className="tech-icon">
              <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faJs} size="2x" title="JavaScript" />
              <span>JS</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faPhp} size="2x" title="PHP" />
              <span>PHP</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faReact} size="2x" title="React" />
              <span>React</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faNodeJs} size="2x" title="Node.js" />
              <span>Node.js</span>
            </div>
          </div>
        </div>
        <div className="about-block">
          <h2>Engagement Éthique</h2>
          <p>
            Mon engagement envers l'accessibilité et la qualité web est renforcé
            par une formation spécialisée avec Access42 et une utilisation
            quotidienne des meilleures pratiques du livre "Les 240 règles
            d'Opquast". Je m'efforce d'intégrer des pratiques durables dans
            chaque projet, avec une prochaine étape : valider mes compétences en
            éco-conception avec GreenIt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
