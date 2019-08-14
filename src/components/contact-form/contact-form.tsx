import React, { SyntheticEvent } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, SubmitButton } from '../form';
import { Grid, Snackbar } from '@material-ui/core';
import axios from 'axios';
import SnackbarItem from '../snackbar-item';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  message: Yup.string()
    .min(25)
    .required()
});

const ContactForm = () => {
  const [open, setOpen] = React.useState<boolean>(false);
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
      setOpen(true);
      setSubmitting(false);
    } catch (serverError) {
      setStatus({ serverError });
      setSubmitting(false);
    }
  };

  function handleClose(event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <>
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarItem
          onClose={handleClose}
          variant="success"
          message="Success, your message has been sent!"
        />
      </Snackbar>
    </>
  );
};

export default ContactForm;
