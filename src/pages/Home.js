import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
//import { faPaintRoller, faHome, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from '../components/Hero';

import './Home.scss';

function Home() {
  return (
    <div>
      <Hero color="is-primary" title="Market Ready Painting" subtitle="Your local home repair specialist" />
      <section className="section">
        <div className="container">
          <nav class="level">
            <div class="level-item has-text-centered">
              <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                <p class="heading">Years Experience</p>
                <p class="title">25+</p>
              </ScrollAnimation>
            </div>
            <div class="level-item has-text-centered">
              <ScrollAnimation animateIn="fadeInUp" delay="500" animateOnce="true">
                <p class="heading">Happy Customers</p>
                <p class="title">100+</p>
              </ScrollAnimation>
            </div>
            <div class="level-item has-text-centered">
              <ScrollAnimation animateIn="fadeInUp" delay="1000" animateOnce="true">
                <p class="heading">Built Additions</p>
                <p class="title">10+</p>
              </ScrollAnimation>
            </div>
          </nav>
        </div>
      </section>
      <section className="section">
        <ScrollAnimation animateIn="fadeIn" duration="3" animateOnce="true" className="container">
          <p className="content is-large mainquote">Carpentry, painting, repairs, restoration, and more. My services might be varied, but they all
          come with the same promise of quality, dedication, and durability. Licensed and insured, I’m an experienced contractor with a well-qualified
          and trusted team. I'm personally always on-site ensuring attention to detail and even an element of fun. I love what I do!
          </p>
          <p className="content is-medium quoteend">-Danny Sweeney</p>
        </ScrollAnimation>
      </section>
      <hr />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <h1 className="title">Testimonials</h1>

              <ScrollAnimation animateIn="animate__backInLeft" animateOnce="true">
                <blockquote class="bq-testimonial content">
                  "Incredibly efficient and professional! I was extremely impressed with how quickly Danny got back to me when I posted the job.
                  He worked with my schedule to give me a quote and complete the project. We have already scheduled our next project with him!"
                    <footer>Meg R.</footer>
                </blockquote>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__backInLeft" animateOnce="true">
                <blockquote class="bq-testimonial content">
                  "Danny and his crew did an excellent job. Was quick to respond, very clean, neat and very organized.
                  They painted our whole interior in 2 days. We have had many homes painted this was the best experience.
                  We also hired Danny to do built-in bookcases for our library and he is an excellent carpenter.
                  We have already recommended him to 3 neighbors."
                  <footer>Dr C.</footer>
                </blockquote>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__backInLeft" animateOnce="true">
                <blockquote class="bq-testimonial content">
                  "Danny responded to my request for a quote promptly. His pricing was competitive and he was available to begin as needed.
                  His crew was professional, courteous, and considerate. Mr. Sweeney assured me that I would be completely satisfied with his
                  work and that was the case. Actually, I added several additional tasks for him to do. We were very pleased with his work and
                  would not hesitate to refer, recommend, or use him again in the future."
                  <footer>Mary G.</footer>
                </blockquote>
              </ScrollAnimation>

              <ScrollAnimation animateIn="animate__backInLeft" animateOnce="true">
                <blockquote class="bq-testimonial content">
                  "I wish I could give Danny 100 stars! He is truly gifted! He is very professional, his prices are reasonable
                  and his painting skills are like no other! Danny thank you for making my first home beautiful!"
                    <footer>Whitney L.</footer>
                </blockquote>
              </ScrollAnimation>
            </div>
            <div className="column aside">
              <h2 className="subtitle">My Promise</h2>
              <ScrollAnimation className="content" animateIn="animate__backInRight" animateOnce="true">
                I’ll only work with the best materials available and provide a 1 year guarantee on all labor. I never compromise quality for time
                and give my clients realistic schedules that accommodate their lives. I strive for honest customer service, so contracts are only
                paid in full when the finished work is to your complete satisfaction.
                <br />
                <br />
                <br />
                <ScrollAnimation animateIn="animate__heartBeat" initiallyVisible="true" delay="1250" duration="2" animateOnce="true">
                  <Link className="button is-warning" to="/gallery">See my work</Link>
                </ScrollAnimation>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;