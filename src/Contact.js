import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className='title'>Contact Us</h1>
      </div>
      <div className="contact-content">
        <div className="contact-details">
          <h3>Contact Details :</h3>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span className="text">7777 panoramique, Casablanca, Morocco</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <span className="text">bensassin6@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span className="text">+212644178666</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55539.895485988134!2d-7.661449675846807!3d33.56919478862081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1690116163921!5m2!1sen!2sma" width='600px'height='450px'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
