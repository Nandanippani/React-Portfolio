import React from "react";
import './contact.css';

function Contact() {
  return (
    <div class="contact">
      <h2>Contact Information</h2>
      <p>Your email: your-email@example.com</p>
      <p>Your phone: (123) 456-7890</p>
      <form>
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
  );
}

export default Contact;
