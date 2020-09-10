import React from 'react';
import { faPhone, faAddressCard, faEnvelope, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.scss';

import Hero from '../components/Hero';

function Contact() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Hero color="is-warning" title="Contact Us" subtitle="Request a quote or inquire about services" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <ul className="content contact">
                <li><FontAwesomeIcon icon={faAddressCard} /> Daniel Sweeney</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faPhone} /> (919)885-6327</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faEnvelope} /> danny.sweeney85@gmail.com</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faGlobeAmericas} /> Apex, NC</li>
              </ul>
            </div>

            <div className="column">
              <form onSubmit={e => handleSubmit(e)}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input required className="form-input input" type="text" placeholder="Name" />
                    <LineGroup/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input required className="form-input input" type="email" placeholder="Email" />
                    <LineGroup/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Type of inquiry</label>
                  <div className="control">
                    <div className="select">
                      <select required defaultValue='Select an option'>
                        <option hidden disabled>Select an option</option>
                        <option>Get a quote</option>
                        <option>Inquire about jobs</option>
                        <option>General</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="form-input textarea" placeholder="Message"></textarea>
                    <LineGroup/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const LineGroup = () => (
  <svg
    className='form-line'
    viewBox='0 0 40 2'
    preserveAspectRatio='none'
  >
    <path d='M0 1 L40 1' />
    <path d='M0 1 L40 1' className='focus' />
    <path d='M0 1 L40 1' className='invalid' />
    <path d='M0 1 L40 1' className='valid' />
  </svg>
)

export default Contact;