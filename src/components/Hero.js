import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function Hero({color, title, subtitle}) {
  return (
    <section className={"hero is-medium is-bold " + color}>
      <div className="hero-body">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="container">
          <h1 className="title">
            {title}
          </h1>
          <h2 className="subtitle">
            {subtitle}
          </h2>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Hero;