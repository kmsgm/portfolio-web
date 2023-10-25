/* eslint-disable no-console */
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import './Contact.css';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_8j958ei', 'template_tgoskjh', form.current, '-ujpDtaYzB0cGQj_Q');
      (e.target as HTMLFormElement).reset();
      toast.success('Sent successfully!');
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-detail">minseo.kim.7773@gmail.com</span>
              <a href="#contact" className="contact__button">
                Write me &nbsp;
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="message" className="contact__form-tag">
                Content
              </label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write the content"
              />
            </div>
            <button className="button button--flex" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default Contact;
