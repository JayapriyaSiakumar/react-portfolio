import React from 'react';
import ContactForm from '../ContactForm'; 
function Contact() {
  return (
    <section className='px-5 py-6 about-background text-white' id="contact">
      <h1 className='text-4xl font-bold text-center mt-2 mb-2 uppercase'>Contact Me</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;