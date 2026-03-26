import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './ContactForm.css';

const ContactForm = () => (
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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(values);
          alert("Thanks for reaching out, Arif! (Simulated)");
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="styled-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" placeholder="name@example.com" className="form-input" />
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

export default ContactForm;