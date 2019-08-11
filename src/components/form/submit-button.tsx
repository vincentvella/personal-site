import { Button, CircularProgress } from '@material-ui/core';
import { connect } from 'formik';
import React from 'react';

const SubmitButton: React.FC<any> = ({ formik, children, ...props }) => {
  const { isValid, isSubmitting, handleSubmit } = formik;
  return (
    <Button
      color="primary"
      disabled={!isValid || isSubmitting}
      onClick={handleSubmit}
      type="submit"
      variant="contained"
      {...props}
    >
      {isSubmitting ? <CircularProgress size={22} /> : children}
    </Button>
  );
};

export default connect(SubmitButton);
