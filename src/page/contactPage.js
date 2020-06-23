import React, { useEffect } from "react";
import TopContact from "../components/contact/topContact";
import ContactForm from "../components/contact/contactForm";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="content">
      <div className="container">
        <TopContact />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
