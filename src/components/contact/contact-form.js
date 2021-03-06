import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as styles from './contact-form.module.css';
import { Link } from 'gatsby';
export default function ContactForm(props) {
  const [state, handleSubmit] = useForm('mbjwqqdy');

  if (state.succeeded) {
    return (
      <div className={styles.succeededContainer}>
        <p className={styles.succeeded}>
          Thanks For Getting In Touch! I'll get back to you ASAP
        </p>
        <Link className={styles.homeLink} to='/'>
          Home
        </Link>
      </div>
    );
  }
  return (
    <>
      <h1 className={styles.header}>Let's make some music</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>First Name*</label>
        <input id='name' name='name' type='text' required={true} />
        <label htmlFor='lastname'>Last Name*</label>
        <input id='lastname' name='lastname' type='text' required={true} />
        <label htmlFor='email'>Email Address*</label>
        <input id='email' type='email' name='_replyto' required={true} />
        <label htmlFor='subject'>Subject Line*</label>
        <input name='subject' id='subject' type='text' required={true} />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message'>Message*</label>
        <textarea
          rows='8'
          cols='40'
          id='message'
          name='message'
          required={true}
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        <button
          type='submit'
          className={styles.submitButton}
          disabled={state.submitting}>
          Send
        </button>
      </form>
    </>
  );
}
