import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Thump() {
  return (
    location.map((location) => (
    <Link to={`/location/${location.id}`} className="thump" key={location.id}> {/* Création d'un lien vers une page d'emplacement spécifique avec une classe "thump" et une clé unique basée sur l'ID de l'emplacement.*/}
      <img src={location.cover} alt={location.title} />
      <h3>{location.title}</h3>
    </Link>)
  ))
}

Thump.propTypes = { // Définition des types de données attendus pour les props du composant Thump.
    location: PropTypes.array.isRequired // La prop "location" doit être un tableau et est obligatoire.
};

export default Thump
