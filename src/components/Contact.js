import React from "react";
import './contact.css';



function Contact() {
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
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
