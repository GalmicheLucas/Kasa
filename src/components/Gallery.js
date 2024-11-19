import React from 'react';
import { data } from '../data/logements';
import Annonce from './Annonce';
import '../sass/components/thump.scss';

function Gallery() {
  return (
    <div className="gallery">
      {data.map((annonce) => (
        <Annonce
          key={annonce.id}
          nom={annonce.title}
          prix={annonce.price} // Assurez-vous que les propriétés existent dans vos données
          image={annonce.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;


