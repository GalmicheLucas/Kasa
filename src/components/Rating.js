import PropTypes from "prop-types";
import starFull from "../images/red_star.png";
import starEmpty from "../images/grey_star.png";
import "../sass/components/location.scss";

import React from 'react'

function Rating({rating}) {

    const totalStars = 5;
  return (
    <div className="rating">
      {/* Boucle pour créer chaque étoile */}
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          // Clé unique pour chaque étoile
          key={index}
          // Détermine l'image de l'étoile pleine ou vide en fonction de l'indice par rapport à la note
          src={index < rating ? starFull : starEmpty}
          // Alt différent selon que l'étoile est pleine ou vide
          alt={index < rating ? "Full Star" : "Empty Star"}
        />
      ))}
    </div>
  )
}

// Définition du type de la prop "rating" comme un nombre requis
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
  };

export default Rating
