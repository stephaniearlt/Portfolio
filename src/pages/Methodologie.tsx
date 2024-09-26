import React, { useEffect, useState } from "react";
import methodologyData from "../datas/methodology.json";

// Définir l'interface pour la méthodologie
interface Methodology {
  id: string; 
  image: string;
  title: string;
  description: string;
  keywords: string[];
  stat: string;
  statLabel: string;
}

const Methodologie: React.FC = () => {
  // Typage de l'état pour être un tableau de Methodology
  const [methodologies, setMethodologies] = useState<Methodology[]>([]);

  // Charger les données du fichier JSON
  useEffect(() => {
    setMethodologies(methodologyData);
  }, []);

  return (
    <main className="methodology-container" role="main">
      <h1>Méthodologie</h1>

      <p className="intro">
        Ces approches vous garantissent une collaboration efficace, flexible et
        orientée vers les résultats, pour des projets menés avec rigueur et
        sérénité.
      </p>

      <section className="methodology-sections">
        {methodologies.map((method) => (
          <article className="methodology-block" key={method.id}>
            <img
              src={method.image}
              alt="" // Image décorative, alt vide
              className="methodology-image"
              width="150"
              height="150"
            />
            <h2>{method.title}</h2>
            <p>{method.description}</p>
            <div className="keywords">
              {method.keywords.map((keyword, i) => (
                <span key={i} className="keyword">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="key-stat">
              <span className="stat-value">{method.stat}</span>
              <span className="stat-label">{method.statLabel}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Methodologie;
