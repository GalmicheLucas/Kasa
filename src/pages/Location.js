import { useParams, useNavigate } from 'react-router-dom';
import "../sass/components/location.scss";

import Rating from "../components/Rating" ;
import Collaps from "../components/Collaps";
import Slideshow from '../components/Slideshow';
import Tags from "../components/Tags";
import data from "../data/logements";

const findLocationByID = (id) => data.find((location) => String(location.id) === String(id));

const Location = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Recherche de la location correspondante
  const location = findLocationByID(id);

  // Redirection en cas de données invalides
  if (!location) {
    console.error(`Location not found for ID: ${id}`);
    navigate("/error");
    return null;
  }

  // Vérification des données essentielles
  const { pictures, host, title, location: tags, rating, description, equipments } = location;
  if (!pictures || !host) {
    console.error("Missing pictures or host data:", location);
    navigate("/error");
    return null;
  }

  return (
    <div className="locationPage">
      {/* Carousel d'images */}
      <Slideshow slides={pictures} />

      {/* Conteneur des infos */}
      <div className="locationAllInfo">
        {/* Titre et emplacement */}
        <div className="locationMainInfo">
          <div className="locationTitlePlace">
            <h2>{title}</h2>
            
            <Tags tags={tags} />
          </div>
        </div>

        {/* Hôte et note */}
        <div className="hostRating">
          <div className="host">
            <h3>{host.name}</h3>
            <img src={host.picture} alt={`Hôte: ${host.name}`} />
          </div>
          <div className="rating">
            <Rating value={rating} />
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="locationSideInfo">
          <Collaps title="Description">
            <p>{description}</p>
          </Collaps>
          <Collaps title="Équipements">
            <ul>
              {equipments?.map((equip) => (
                <li key={equip}>{equip}</li>
              ))}
            </ul>
          </Collaps>
        </div>
      </div>
    </div>
  );
};

export default Location;
