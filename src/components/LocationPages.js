import { useParams, useNavigate } from "react-router-dom";
import "../sass/components/location.scss";

import Rating from "./Rating";
import Collaps from "../components/Collaps";
import Slideshow from "./Slideshow";
import Tags from "../components/Tags";
import data from "../data/logements";

// Fonction utilitaire pour rechercher un logement par ID
const findLocationByID = (id) =>
  data.find((location) => String(location.id) === String(id));

const LocationPages = () => {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const navigate = useNavigate(); // Pour rediriger si l'ID est invalide

  console.log("ID depuis l'URL:", id); // Vérification de l'ID

  // Recherche de la location correspondante
  const locationData = findLocationByID(id);
  console.log("Location Data:", locationData); // Vérification des données

  // Redirection si aucune donnée n'est trouvée
  if (!locationData) {
    console.error(`Location not found for ID: ${id}`);
    navigate("/error"); // Redirige vers une page d'erreur
    return null;
  }

  // Déstructuration des données avec une valeur par défaut pour `location`
  const {
    pictures,
    host,
    title,
    location: place = "Emplacement non spécifié", // Valeur par défaut
    tags,
    rating,
    description,
    equipments,
  } = locationData;

  console.log("Place (location):", place); // Vérification de la valeur de place

  return (
    <div className="locationPage">
      {/* Diaporama */}
      <Slideshow slides={pictures} />

      <div className="locationAllInfo">
        {/* Informations principales */}
        <div className="locationMainInfo">
          <div className="locationTitlePlace">
            <h2>{title}</h2>
            <h3>{place}</h3> {/* Affichage de l'emplacement */}
          </div>
          <div className="tags">
            {Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => <Tags key={index} text={tag} />)
            ) : (
              <p>Aucun tag disponible</p>
            )}
          </div>
        </div>

        {/* Informations sur l'hôte et la notation */}
        <div className="hostRating">
          <div className="host">
            <h3>{host.name}</h3>
            <img src={host.picture} alt={`Hôte: ${host.name}`} />
          </div>
          <div className="rating">
            <Rating rating={Number(rating) || 0} />
          </div>
        </div>

        {/* Description et équipements */}
        <div className="locationSideInfo">
          <Collaps title="Description">
            <p>{description}</p>
          </Collaps>
          <Collaps title="Équipements">
            <ul>
              {equipments?.map((equip, index) => (
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
