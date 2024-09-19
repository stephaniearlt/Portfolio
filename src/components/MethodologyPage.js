import React, { useEffect, useState } from "react";
import methodologyData from "../datas/methodology.json";

const MethodologyPage = () => {
  const [methodologies, setMethodologies] = useState([]);

  // Charger les données du fichier JSON
  useEffect(() => {
    setMethodologies(methodologyData);
  }, []);

  return (
    <div className="methodology-container">
      <h1 className="section-title">Méthodologie</h1>

      <div className="summary-box">
        <p>
          Ces approches vous garantissent une collaboration efficace, flexible
          et orientée vers les résultats, pour des projets menés avec rigueur et
          sérénité.
        </p>
      </div>
      <div className="methodology-sections">
        {methodologies.map((method, index) => (
          <div className="methodology-block" key={index}>
            <img
              src={method.image}
              alt={`${method.title} Method`}
              className="methodology-image"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodologyPage;
