import { useState } from "react";

import leftArrow from "../images/chevron_carousel_left.png"
import rightArrow from "../images/chevron_carousel_right.png"
import React from 'react'

function Slideshow ({ slides })  {

    const [currentIndex, setCurrentIndex] = useState(0);

 // Fonction pour passer au slide suivant
 const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour passer au slide précédent
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };




  return (
    <div className="carousel">
    {/* Vérification si le nombre de slides est supérieur à 1 */}
    {slides.length > 1 && (
      // Bouton pour passer au slide précédent avec l'icône de la flèche gauche
      <button onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" className="previous" />
      </button>
    )}
    {/* Affichage de l'image du slide actuel avec l'index  et Texte alternatif pour l'image, affiche "Slide" suivi du numéro du slide actuel*/}
    <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carouselImage" />
    {/* Vérification si le nombre de slides est supérieur à 1 */}
    {slides.length > 1 && (
      // Bouton pour passer au slide suivant avec l'icône de la flèche droite
      <button onClick={nextSlide}>
        <img src={rightArrow} alt="Next" className="next" />
      </button>
    )}
    {/* Affichage du numéro du slide actuel et du nombre total de slides */}
    {slides.length > 1 && (
      <span className="slideNumber">{`${currentIndex + 1} / ${slides.length}`}</span>
    )}
  </div>
);
};


export default Slideshow
