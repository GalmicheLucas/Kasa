import data from "../data/logements.js";
import React from 'react'

function Gallery() {
  return (
    <div className="gallery">
      <Thump location={data} />
    </div>
  )
}

export default Gallery
