import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Services.scss';

import Hero from '../components/Hero';


function Services() {
  return (
    <div>
      <Helmet>
        <title>Available Services | Market Ready Painting</title>
      </Helmet>
      <Hero color="is-info" title="Services Offered" subtitle="View our collection of available services"/>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2} className="section">
        <div className="container service">
          <h1 className="title has-text-centered">Epoxy Garage Floor</h1>
          <p className="content service-text">We love working with these projects! A clean and colorful new floor can make all the difference for 
          a potential buyer! Or a new beginning for your favorite workshop. <Link to="/contact">Give us a call</Link> and we will make it happen.</p>
          <img class="Sirv" data-src="https://tumhompl.sirv.com/MarketReadyPainting/Services/blueepoxy.jpg?w=50%25&h=50%25" alt="" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2} className="section">
        <div className="container service">
          <h1 className="title has-text-centered">Decorative Stamped Concrete</h1>
          <p className="content service-text">The biggest trend of the summer is sprucing up your driveways and patios with some decorative stamped 
          concrete! Stamped clay has been around since ancient Greece and Rome. It adds an artistic detail to your home and shows you care 
          about the little things in life. We'd love to help you pull this project together, <Link to="/contact">so give us a call!</Link></p>
          <img src="https://tumhompl.sirv.com/MarketReadyPainting/Services/stampedconcrete.jpg" width="512" height="418" alt="" />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2} className="section">
        <div className="container service">
          <h1 className="title has-text-centered">Powerwashing</h1>
          <p className="content service-text">Tired of algae and grime covering your house and patio? Wanting to restore cleanliness to the 
          exterior of your home? Powerwashing is the affordable solution to your headaches. We carry the equipment suitable for any powerwashing job, 
          feel free to reach out for a <Link to="/contact">free quote</Link> on cleaning up your home today.</p>
          <img class="Sirv" data-src="https://tumhompl.sirv.com/MarketReadyPainting/Services/powerwashing.jpeg?w=10%25&h=10%25" alt="" />    
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={2} className="section">
        <div className="container service">
          <h1 className="title has-text-centered">Interior and Exterior Painting and Repair</h1>
          <p className="content service-text">Is your exterior paint beginning to chip or fade? Looking to spruce up your house before hitting the market? 
          Is your house simply in disarray? If answered "Yes!" to any of those questions, <Link to="/contact">give us a call</Link> to schedule a free quote today</p>
          <img class="Sirv" data-src="https://tumhompl.sirv.com/MarketReadyPainting/Services/painting_exterior.jpeg?w=15%25&h=15%25" alt="" />
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Services;