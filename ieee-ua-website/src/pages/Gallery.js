import React, { useState } from 'react';
import './Gallery.css'; // your CSS file

function Gallery() {
  const totalImages = 4; // or whatever number you have

  function getRandomImagePath() {
    const randomNumber = Math.floor(Math.random() * totalImages) + 1; // random 1~5
    return `/images/2024-2025/GalleryPhotos/randomPhotos/${randomNumber}.jpg`;
  }

  // Then create the image element:
  const images = Array.from({ length: 9 }, (_, index) => (
    <img 
      key={index} 
      src={getRandomImagePath()} 
      alt="Workshop" 
      className="gallery-image"
    />
  ));

  return (
    <div className="page">
      <div className="gallery-container">
        {images}
      </div>
    </div>
  );
}

export default Gallery;