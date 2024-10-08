import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-page">
      {/* Left Section */}
      <div className="contact-info">
        <h2>Address</h2>
        <p>Mada Center 8th floor, 379 Hudson</p>
        <p>St, New York, NY 10018 US</p>

        <h2>Lets Talk</h2>
        <p className="contact-phone">+1 800 1236879</p>

        <h2>General Support</h2>
        <p className="contact-email">contact@example.com</p>
      </div>

      {/* Right Section */}
      <div className="contact-form">
        <h2>Send Us A Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Tell us your name *</label>
            <div className="name-inputs">
              <input type="text" id="firstName" placeholder="First name" />
              <input type="text" id="lastName" placeholder="Last name" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Enter your email *</label>
            <input type="email" id="email" placeholder="Eg. example@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Enter phone number</label>
            <input type="text" id="phone" placeholder="Eg. +1 800 000000" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder="Write us a message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
