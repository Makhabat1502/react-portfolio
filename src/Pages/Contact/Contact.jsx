import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <section className="contact">
      <h1>My Contacts</h1>
      <div className="container contacts__container">
        <div className="contact__col">
          <form>
            <label>
              Your Name
              <input placeholder="John Doe" />
            </label>
            <div className="contact__error">
              <p></p>
            </div>
            <label>
              Your Email
              <input placeholder="test@gmail.com" />
            </label>
            <div className="contact__error">
              <p></p>
            </div>
            <label>
              Your Message
              <textarea></textarea>
            </label>
            <div className="contact__error">
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
