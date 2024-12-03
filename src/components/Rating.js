import PropTypes from "prop-types";
import starFull from "../images/red_star.png";
import starEmpty from "../images/grey_star.png";

// Définition du composant Rating avec une prop "rating"
const Rating = ({ rating }) => {
  // Définition du nombre total d'étoiles
  const totalStars = 5;

  // Retourne le composant d'évaluation
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
  );
};

// Définition du type de la prop "rating" comme un nombre requis
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

// Export du composant Rating
export default Rating;