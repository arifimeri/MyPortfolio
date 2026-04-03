import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // 1. Import SweetAlert2
import './ContactForm.css';

const ContactForm = () => {

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .min(10, 'Email is too short to be real')
      .required('Required')
      .test('no-gibberish', 'Please enter a valid, human email', (value) => {
        if (!value) return true;
        const blacklist = ['example', 'telephone', 'test', 'admin', 'dasdasd', 'abcde'];
        const isBlacklisted = blacklist.some(word => value.toLowerCase().includes(word));
        const hasHumanName = /^[a-zA-Z]{3,}/.test(value); 
        return !isBlacklisted && hasHumanName;
      }),
    message: Yup.string()
      .min(15, 'Please write a more detailed message (min 15 chars)')
      .required('Please enter a message'),
  });

  const sendEmail = (values, actions) => {
    // 2. Show a loading state while sending
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait a moment',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    emailjs.send(
      'service_di73zof',   
      'template_0hroi08',  
      {
        from_email: values.email,
        message: values.message,
      },
      'XbGmwnc27Ed4kZWAN'    
    )
    .then((response) => {
      // 3. Beautiful Success Popup
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you, Arif will get back to you soon.',
        confirmButtonColor: '#1d3795', // Matches your accent-purple
        timer: 3000
      });
      actions.setSubmitting(false);
      actions.resetForm();
    })
    .catch((err) => {
      // 4. Beautiful Error Popup
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#bd1c1c'
      });
      actions.setSubmitting(false);
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Send me a <span className="purple-text">Message</span></h2>
      
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          sendEmail(values, actions);
        }}
      >
        {({ isSubmitting, isValid, dirty, errors, touched }) => (
          <Form className="styled-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <Field 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`} 
              />
              <ErrorMessage name="email" component="div" className="error-msg" />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <Field 
                as="textarea" 
                name="message" 
                placeholder="How can I help you?" 
                className={`form-input textarea ${errors.message && touched.message ? 'input-error' : ''}`} 
              />
              <ErrorMessage name="message" component="div" className="error-msg" />
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting || !isValid || !dirty}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;