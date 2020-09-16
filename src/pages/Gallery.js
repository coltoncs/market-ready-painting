import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Our Gallery | Market Ready Painting</title>
      </Helmet>
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
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/trellice_painting.jpg" width="750" height="1000" alt="Backyard trellice and fence painting" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={250} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/interior_painting.jpg" width="750" height="422" alt="Interior painting and repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={500} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/deck_renovations.jpg" width="750" height="422" alt="Complete deck renovations" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={750} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/exterior_painting.jpg" width="1000" height="562" alt="Exterior paint and repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/front_deck_repair.jpg" width="750" height="422" alt="House exterior" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={250} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/frontporch_ceiling.jpg" width="1500" height="844" alt="Front porch door and ceiling repair" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={500} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/furniture_refinish.jpg" width="750" height="1000" alt="Furniture repair and repaint" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
          <ScrollAnimation animateIn={animation} delay={750} animateOnce={true} className="gallery-item">
            <img src="https://tumhompl.sirv.com/MarketReadyPainting/Gallery/sprinkleepoxy.jpg" width="600" height="442" alt="Garage floor sprinkle epoxy" onClick={(e) => handleClick(e)} />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

export default Gallery;