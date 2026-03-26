import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser'; // 1. Import the library
import './ContactForm.css';

const ContactForm = () => {
  // 2. Function to send the email
  const sendEmail = (values, actions) => {
    emailjs.send(
      'service_di73zof',   // Replace with your Service ID
      'template_0hroi08',  // Replace with your Template ID
      {
        from_email: values.email,
        message: values.message,
      },
      'XbGmwnc27Ed4kZWAN'    // Replace with your Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully, Arif!");
      actions.setSubmitting(false);
      actions.resetForm();
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert("Something went wrong. Please try again.");
      actions.setSubmitting(false);
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Send me a <span className="purple-text">Message</span></h2>
      <Formik
        initialValues={{ email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.message) {
            errors.message = 'Please enter a message';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          sendEmail(values, actions); // 3. Call the send function
        }}
      >
        {({ isSubmitting }) => (
          <Form className="styled-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <Field type="email" name="email" placeholder="Enter your email address" className="form-input" />
              <ErrorMessage name="email" component="div" className="error-msg" />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" placeholder="How can I help you?" className="form-input textarea" />
              <ErrorMessage name="message" component="div" className="error-msg" />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;