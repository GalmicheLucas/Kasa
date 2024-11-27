import React from 'react'
import "../sass/layout/banner.scss"
import imgApropos from "../images/about_cover.png"

function Banner() {
  return (
    <div className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

const AboutPage = () => {
  return (
    <div className='banner-about' imgSrc={imgApropos} altText="Image à propos" title="" >
    </div>
  );
};

export default Banner
export { AboutPage}
