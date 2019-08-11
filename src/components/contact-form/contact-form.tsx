import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, SubmitButton } from '../form';
import { Grid } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string().required()
});

const ContactForm = () => (
  <Formik
    initialValues={{ email: '', message: '' }}
    onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
      setSubmitting(true);
      try {
        setTimeout(() => {
          alert(JSON.stringify(values));
          resetForm();
          setStatus({ success: 'You did it!' });
          setSubmitting(false);
        }, 500);
      } catch (serverError) {
        setStatus({ serverError });
        setSubmitting(false);
      }
    }}
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
