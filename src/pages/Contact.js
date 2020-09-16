import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm } from 'react-hook-form';
import { faPhone, faAddressCard, faEnvelope, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.scss';

import Hero from '../components/Hero';

function Contact() {
  const [status, setStatus] = useState('');
  const {register, handleSubmit, errors} = useForm();
  const formRef = useRef(null);

  const onSubmit = (data) => {
    emailjs.sendForm('service_hridu79', 'template_jrm3so9', formRef.current).then((res) => setStatus("Email successfully sent!"), (err) => setStatus("Error sending email, please try again later."));
    formRef.current.reset();
  }

  return (
    <div>
      <Helmet>
        <title>Contact Us | Market Ready Painting</title>
      </Helmet>
      <Hero color="is-primary" title="Contact Us" subtitle="Request a quote or inquire about services" />
      <section className="section">
        <div className="container">
          {status !== '' && (
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} className="notification has-text-centered">{status}</ScrollAnimation>
          )}
          <div className="columns">
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true} className="column  has-text-centered">
              <h2 className="subtitle">Contact Information</h2>
              <ul className="content contact">
                <li><FontAwesomeIcon icon={faAddressCard} /> Daniel Sweeney</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faPhone} /> (919) 924-6485</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faEnvelope} /> danny.sweeney85@gmail.com</li>
                <LineGroup/>
                <li><FontAwesomeIcon icon={faGlobeAmericas} /> Apex, NC</li>
              </ul>
              <hr/>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__backInRight" animateOnce={true} className="column">
              <h2 className="subtitle  has-text-centered">Let's Get In Touch</h2>
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input required className="form-input input" type="text" name="name" placeholder="Name" ref={register} />
                    <LineGroup/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input required className="form-input input" type="email" name="email" placeholder="Email" ref={register({required: true})} />
                    <LineGroup/>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Type of inquiry</label>
                  <div className="control">
                    <div className="select">
                      <select required defaultValue='Select an option' name="subject" ref={register}>
                        <option hidden disabled>Select an option</option>
                        <option value="Get a Quote">Get a quote</option>
                        <option value="Inquire about jobs">Inquire about jobs</option>
                        <option value="General">General</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="form-input textarea" name="message" placeholder="Message" ref={register}></textarea>
                    <LineGroup/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="button is-fullwidth" type="submit" value="Submit"/>
                  </div>
                </div>
              </form>
            </ScrollAnimation>
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