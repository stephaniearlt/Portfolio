import React, { useState, useEffect } from "react";
import SocialMedia from "./SocialMedia";

const dynamicTexts = [
  { text: "JavaScript", image: "/images/javascript.webp" },
  { text: "React", image: "/images/react.webp" },
  { text: "WordPress", image: "/images/wordpress.webp" },
  { text: "Spécialisée en Accessibilité", image: "/images/accessibility.webp" },
];

function TextAnimator() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showImage, setShowImage] = useState(null);
  const [imageClass, setImageClass] = useState("");

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
        <p>Je suis développeuse</p>
        <p className="dynamic-text">{text}</p>
      </div>
      <div className="image-container">
        {showImage && (
          <img
            src={showImage}
            alt={dynamicTexts[index].text}
            className={`animated-image ${imageClass}`}
          />
        )}
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default TextAnimator;
