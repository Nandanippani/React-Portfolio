import React from "react";
import './contact.css';
import { useState } from 'react';




function Contact(props) {
  const [alert, setAlert] = useState('');
  const alertMessage=(event)=>{
    event.preventDefault();
    setAlert(alert('Thank you for submitting your details'))};
  return (
    <div className="contact-header">
    <div className="contact">
      <h2 id="contact-info">Contact Information:</h2>
      <p id="contact-email">Email Id: nandinik4090@gmail.com</p>
      <p id="contact-phone"> Contact Phone number: +447354209651</p>
      </div>
      <div className="form-field">
      <form >
        <label>
          Name:
          <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button onClick={alertMessage}>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
