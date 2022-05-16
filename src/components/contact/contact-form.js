import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as styles from './contact-form.module.css';

export default function ContactForm(props) {
  const [state, handleSubmit] = useForm('mbjwqqdy');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' className={styles.nameLabel}>
          First Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className={styles.nameInput}
          required={true}
        />
        <label htmlFor='lastname' className={styles.lastnameLabel}>
          Last Name
        </label>
        <input
          id='lastname'
          name='lastname'
          type='text'
          className={styles.lastnameInput}
          required={true}
        />
        <label htmlFor='email' className={styles.emailLabel}>
          Email Address
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className={styles.emailInput}
          required={true}
        />
        <label htmlFor='subject' className={styles.subjectLabel}>
          Subject Line
        </label>
        <input
          name='subject'
          id='subject'
          type='text'
          className={styles.subjectInput}
          required={true}
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message' className={styles.messageLabel}>
          Message
        </label>
        <textarea
          rows='8'
          cols='40'
          id='message'
          name='message'
          required={true}
          className={styles.messageInput}
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          type='submit'
          className={styles.submitButton}
          disabled={state.submitting}>
          Get In Touch
        </button>
        {/* <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
      Submit
    </button> */}
      </form>
    </div>
  );
}
