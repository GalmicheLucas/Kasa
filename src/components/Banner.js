import React from 'react';
import "../sass/layout/banner.scss"; // Vérifie que le fichier CSS est bien dans ce dossier
import imgApropos from "../images/about_cover.png"; // Vérifie le chemin de l'image
import imgBanner from "../images/home_cover.png"; // Vérifie le chemin de l'image

// Bannière principale
function Banner() {
  return (
    <div className="banner">
      <img src={imgBanner} alt="Image Banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

// Page à propos
const AboutPage = () => {
  return (
    <div className='banner-about'>
      <img src={imgApropos} alt="Photo à propos" />
    </div>
  );
};

export default Banner;
export { AboutPage };
