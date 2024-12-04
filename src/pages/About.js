import Banner from "../components/Banner";
//import des données du fichier collaps.json avec les infos des éléments collaps
import collapsJson from "../data/collaps.json"
// Import du composant Collaps qui sera utilisé pour afficher chaque élément de collaps
import Collaps from "../components/Collaps"
import React from 'react'

function About() {
  return (
    <div className="about">
      <Banner />
      
      {collapsJson.map((collaps, index) => ( // Utilisation de la méthode map() pour parcourir chaque élément du tableau collapsJson.
                <Collaps key={index} title={collaps.title} ><p>{collaps.text}</p> {/* Création d'un composant Collaps pour chaque élément de collapsJson, avec un titre et un texte spécifiques. */}
                </Collaps> // Fermeture du composant Collaps.
            ))}
    </div>
  )
}

export default About
