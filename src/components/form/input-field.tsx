import { TextField, FormControl } from '@material-ui/core';
import { connect, getIn } from 'formik';
import React from 'react';

const CustomTextField: React.FC<any> = ({ formik, ...props }) => {
  const err = getIn(formik.errors, props.name);
  const touched = getIn(formik.touched, props.name);

  const error = err && touched ? { error: true, helperText: err } : {};

  const updatedProps = {
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    margin: 'normal',
    value: getIn(formik.values, props.name),
    variant: 'outlined',
    ...error,
    ...props
  };

  return <TextField fullWidth {...updatedProps} />;
};

export default connect(CustomTextField);
