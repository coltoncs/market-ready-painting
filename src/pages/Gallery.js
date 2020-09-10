import React from 'react';
import './Gallery.scss';

import Hero from '../components/Hero';


function Gallery() {
  return (
    <div>
      <Hero color="is-success" title="Our Work" subtitle="A collection of happy customers"/>
      <section className="section">
        <div className="container gallery">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/150"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery;