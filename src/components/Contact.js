import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Address: 83 Hag Hill Rise, Taplow SL6 0LT</p>
        <p>Phone: 07342745183</p>
        <p>Email: nandanippani@yahoo.com</p>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit" className="bg-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
