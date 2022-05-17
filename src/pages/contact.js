import * as React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contact/contact-form';
import BackgroundStatic from '../components/contact/background-static';
import ContactLayout from '../components/contact/contact-layout';
const ContactPage = (props) => {
  return (
    <ContactLayout>
      <ContactForm />
    </ContactLayout>
  );
  // return (
  //   <BackgroundStatic>
  //     <Layout>
  //       <ContactForm />{' '}
  //     </Layout>
  //   </BackgroundStatic>
  // );
};

export default ContactPage;
