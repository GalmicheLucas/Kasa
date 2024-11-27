import React from 'react';
import { Link } from "react-router-dom";
import "../sass/components/annonce.scss"

function Annonce({ nom, id, image }) {
  return (
    // liens logements
    <Link to={`/location/${id}`} className="annonce">

      <img src={image} alt={nom} className="annonce__image" />
      <div className="annonce__info">
        <h3 className="annonce__title">{nom}</h3>
        
      </div>
    </Link>
  );
  
}


export default Annonce;
