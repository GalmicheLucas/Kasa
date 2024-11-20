import { useParams } from 'react-router-dom';

// Import des données des logements
import data from "../data/logements";
// Import du composant Collaps
import Collaps from "../components/Collaps";
// Import du composant Slideshow pour le carousel d'images
import Slideshow from './Slideshow';

const LocationPages = () => {
  // Récupération de l'ID depuis les paramètres de l'URL
  const { id } = useParams();

  // Fonction pour trouver un logement par son ID
  const findLocationByID = (id) => data.find((location) => location.id === id);

  // Récupération des données du logement par son ID
  const location = findLocationByID(id);

  if (!location) {
    // Redirection vers "/error" si aucun logement n'est trouvé
    window.location.href = "/error";
    return null; // Retourne null pour ne rien afficher
  }

  return (
    <div className="locationPage">
      {/* Slide pour afficher les images de l'emplacement */}
      <Slideshow slides={location.pictures} />

      {/* Conteneur pour toutes les infos */}
      <div className="locationAllInfo">
        {/* Section pour les infos principales */}
        <div className="locationMainInfo">
          {/* Titre, lieu et Tags de l'emplacement */}
          <div className="locationTitlePlace">
            {/* Titre */}
            <h2>{location.title}</h2>
            {/* Lieu */}
            <h3>{location.location}</h3>
            {/* Tags */}
            <div className="containerTags">
              {location.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section pour l'hôte et sa note */}
        <div className="hostRating">
          {/* Nom de l'hôte et sa photo */}
          <div className="host">
            <h3>{location.host.name}</h3>
            <img src={location.host.picture} alt={`Hôte: ${location.host.name}`} />
          </div>

          {/* Affiche la note de l'emplacement */}
          <div className="rating">
            {/* Implémentation du composant Rating à ajouter */}
            {/* Exemple : <Rating value={location.rating} /> */}
          </div>
        </div>

        {/* Sections avec les infos supplémentaires */}
        <div className="locationSideInfo">
          <Collaps title="Description">
            <p>{location.description}</p>
          </Collaps>

          {/* Équipements */}
          <Collaps title="Équipements">
            <ul>
              {location.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </Collaps>
        </div>
      </div>
    </div>
  );
};

export default LocationPages;
