import React, { useState, useEffect } from "react";
import SocialMedia from "./SocialMedia";

const dynamicTexts = [
  "JavaScript",
  "React",
  "WordPress",
  "Spécialisée en Accessibilité",
];

function TextAnimator() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = dynamicTexts[index];
    const speed = isDeleting ? 50 : 120; // Vitesse de frappe et suppression

    const timeoutId = setTimeout(() => {
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1200); // Pause avant suppression
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
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
      <SocialMedia />
    </div>
  );
}

export default TextAnimator;
