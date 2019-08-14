import { Button, CircularProgress, Typography, Grid } from '@material-ui/core';
import { connect } from 'formik';
import React, { useState, useEffect } from 'react';

function useCoolDown(): [boolean, (value: boolean) => void] {
  const [cooledDown, setCooledDown] = useState<boolean>(true);
  useEffect(() => {
    let coolDownTimer;
    if (!cooledDown) {
      coolDownTimer = setTimeout(() => setCooledDown(true), 300000);
    }
    return () => clearTimeout(coolDownTimer);
  }, [cooledDown]);
  return [cooledDown, setCooledDown];
}

const SubmitButton: React.FC<any> = ({ formik, children, ...props }) => {
  const [cooledDown, setCooledDown] = useCoolDown();
  const { isValid, isSubmitting, handleSubmit } = formik;
  const handleClick = (...formikStuff) => {
    setCooledDown(false);
    handleSubmit(...formikStuff);
  };
  return (
    <>
      <Button
        color="primary"
        disabled={!isValid || isSubmitting || !cooledDown}
        onClick={handleClick}
        type="submit"
        variant="contained"
        {...props}
      >
        {isSubmitting ? <CircularProgress size={22} /> : children}
      </Button>
      {isValid && !isSubmitting && !cooledDown && (
        <>
          <Grid item xs={12} />
          <Grid item md={3} />
          <Grid item md={6}>
            <Typography variant="caption" color="error">
              It seems that you've recently submitted a request, please wait 5
              minutes before sending another request
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};

export default connect(SubmitButton);
