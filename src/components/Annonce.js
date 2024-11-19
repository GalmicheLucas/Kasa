import React from 'react';
import "../sass/components/annonce.scss"

function Annonce({ nom, prix, image }) {
  return (
    <div className="annonce">
      <img src={image} alt={nom} className="annonce__image" />
      <div className="annonce__info">
        <h3 className="annonce__title">{nom}</h3>
        <p className="annonce__price">{prix}</p>
      </div>
    </div>
  );
}

export default Annonce;
