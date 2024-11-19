import {useState} from 'react'
import arrow from "../images/arrow.png"
import "../sass/components/collaps.scss"
import PropTypes from "prop-types";

const Collaps = ({ title, children}) => {

// Déclaration de l'état local isOpen qui indique si l'élément est ouvert ou fermé
const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état de l'élément entre ouvert et fermé
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapsContent">
      {/* Titre de l'élément collapsible avec gestion du clic pour basculer l'état */}
      <h2 onClick={toggleSection} className={`headCollaps ${isOpen ? 'open' : ''}`}>
        {/* Affichage du titre */}
        {title}
        {/* Image de la flèche avec gestion de la classe pour l'animation de rotation */}
        <img 
          src={arrow} 
          alt="arrow" 
          className={`arrow ${isOpen ? 'open' : ''}`} 
        />
      </h2>
      {/* Contenu de l'élément collapsible avec gestion de la classe pour l'animation de l'ouverture/fermeture */}
      <div className={`headCollapsContent ${isOpen ? 'open' : ''}`}>
        {/* Affichage du contenu de l'élément collapsible */}
        {children}
      </div>
    </div>
  );
};


// Spécification des types des props avec PropTypes
Collaps.propTypes = {
    title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères et est requis
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element), // un tableau d'éléments React
      PropTypes.node // ou un nœud React (peut être une chaîne de caractères, un élément ou une liste d'éléments)
    ]).isRequired // Le contenu doit être un élément React ou un tableau d'éléments React et est requis
  };
  
export default Collaps
