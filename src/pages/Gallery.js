import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Gallery.scss';

import Hero from '../components/Hero';



function Gallery() {
  const [toggle, setToggle] = useState(false);
  const [src, setSrc] = useState();
  const [alt, setAlt] = useState();

  function handleClick(e) {
    setSrc(e.target.src);
    setAlt(e.target.alt);
    setToggle(!toggle);
  }

  const animation = 'fadeInDown';

  return (
    <div>
      <Hero color="is-success" title="Our Work" subtitle="A collection of happy customers" />
      <section className="section">
        <div className={toggle ? 'modal is-active' : 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image">
              <img src={src} alt={alt} />
              <p className="has-text-centered has-text-white">{alt}</p>
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleClick}></button>
        </div>
        <div className="container gallery">
          <ScrollAnimation animateIn={animation} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B12%2C%2B1%2B27%2B14%2BPM.jpg" width="750" height="1000" alt="Fence and trellice painting" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={250} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B22%2C%2B11%2B54%2B02%2BAM.jpg" width="750" height="422" alt="Interior painting and repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={500} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B22%2C%2B11%2B54%2B05%2BAM%2B(1).jpg" width="750" height="422" alt="Custom built decks and landings" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={750} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B22%2C%2B11%2B54%2B07%2BAM.jpg" width="1000" height="562" alt="Exterior paint and repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B22%2C%2B11%2B54%2B08%2BAM%2B(1).jpg" width="750" height="422" alt="Roof and shingle repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={250} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B12%2C%2B1%2B25%2B09%2BPM.jpg" width="750" height="563" alt="Powerwashing and exterior touch-ups" onClick={(e) => handleClick(e)}  />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={500} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BApr%2B12%2C%2B1%2B26%2B09%2BPM.jpg" width="750" height="1000" alt="Furniture repair and repainting" onClick={(e) => handleClick(e)}  />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={750} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/Images/Photo%2BJun%2B07%2C%2B10%2B24%2B26%2BAM.jpg" width="500" height="889" alt="Front door and patio painting, restoration" onClick={(e) => handleClick(e)}  />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

export default Gallery;