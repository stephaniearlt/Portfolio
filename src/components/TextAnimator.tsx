import React, { useState, useEffect } from "react";

// Définition des types pour les textes dynamiques
interface DynamicText {
  text: string;
  image: string;
}

// Liste des textes dynamiques
const dynamicTexts: DynamicText[] = [
  { text: "JavaScript", image: "/images/javascript.webp" },
  { text: "React", image: "/images/react.webp" },
  { text: "WordPress", image: "/images/wordpress.webp" },
  { text: "En Accessibilité", image: "/images/accessibility.webp" },
];

const TextAnimator: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<string | null>(null);
  const [imageClass, setImageClass] = useState<string>("");

  useEffect(() => {
    const currentText = dynamicTexts[index].text;
    const speed = isDeleting ? 100 : 150; // Vitesse de frappe et suppression

    const timeoutId = setTimeout(() => {
      if (
        !isDeleting &&
        text === currentText.slice(0, Math.floor(currentText.length / 2))
      ) {
        setShowImage(dynamicTexts[index].image); // Affiche l'image au milieu du texte
        setImageClass("");
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => {
          setImageClass("zoom-out");
          setIsDeleting(true);
        }, 1200); // Pause avant suppression
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
        setShowImage(null); // Réinitialise l'image quand le texte est supprimé
        setImageClass("");
      } else {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeoutId); // Nettoyage du temporisateur
  }, [text, isDeleting, index]);

  return (
    <div className="text-animator-container">
      <div className="text-animator">
        <h1>Je suis développeuse</h1>
        {/* 
        Attributs ARIA pour l'accessibilité :
        - `role="status"` : Informe l'utilisateur d'un changement d'état.
        - `aria-live="polite"` : Annonce les mises à jour à l'utilisateur via lecteurs d'écran.
      */}
        <div role="status" aria-live="polite" className="dynamic-text">
          {text}
        </div>
      </div>
      <div className="image-container">
        {showImage && (
          <img
            src={showImage}
            alt={`Logo de ${dynamicTexts[index].text}`}
            className={`animated-image ${imageClass}`}
            width="100"
            height="100"
          />
        )}
      </div>
    </div>
  );
};

export default TextAnimator;
