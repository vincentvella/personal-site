import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, SubmitButton } from '../form';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});

const handleSubmit = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  setSubmitting(true);
  try {
    await axios.post(
      'https://us-central1-personal-site-d9f76.cloudfunctions.net/sendMail',
      values
    );
    resetForm();
    setStatus({ success: 'You did it!' });
    setSubmitting(false);
  } catch (serverError) {
    setStatus({ serverError });
    setSubmitting(false);
  }
};

const ContactForm = () => (
  <Formik
    initialValues={{ email: '', message: '' }}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    render={() => (
      <Form>
        <Grid container>
          <Grid item md={3} />
          <Grid item xs={12} md={6}>
            <InputField fullWidth name="email" label="Email" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} />
          <Grid item xs={12} md={6}>
            <InputField name="message" label="Message" multiline />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3} />
          <SubmitButton>Submit</SubmitButton>
        </Grid>
      </Form>
    )}
  />
);

export default ContactForm;
