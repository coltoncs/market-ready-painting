import React from 'react';
import { Link } from 'react-router-dom'

import Hero from '../components/Hero';

function Services() {
  return (
    <div>
      <Hero color="is-info" title="Services Offered" subtitle="View our collection of available services"/>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Epoxy Garage Floor</h1>
          <p className="content">We love working with these projects! A clean and colorful new floor can make all the difference for 
          a potential buyer! Or a new beginning for your favorite workshop. <Link to="/contact">Give us a call</Link> and we will make it happen.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Decorative Stamped Concrete</h1>
          <p className="content">The biggest trend of the summer is sprucing up your driveways and patios with some decorative stamped 
          concrete! Stamped clay has been around since ancient Greece and Rome. It adds an artistic detail to your home and shows you care 
          about the little things in life. We'd love to help you pull this project together, <Link to="/contact">so give us a call!</Link></p>
        </div>
      </section>
    </div>
  )
}

export default Services;