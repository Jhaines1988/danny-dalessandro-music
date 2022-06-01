import * as React from 'react';
import ContactForm from '../components/contact/contact-form';
import ContactLayout from '../components/contact/contact-layout';
const ContactPage = (props) => {
  return (
    <ContactLayout title="Danny D'Alessandro | Contact">
      <ContactForm />
    </ContactLayout>
  );
};

export default ContactPage;
