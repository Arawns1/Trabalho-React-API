/* eslint-disable react/prop-types */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginErrorToast(props) {
  const [open, setOpen] = React.useState(props.show);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/*<Button variant="outlined" onClick={handleClick}>
        Open success snackbar
  </Button>*/}
      <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
        {
          props.severity == 'success' ? (
            <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
              Logado com sucesso! Redirecionando...
            </Alert>
          ) : (
            <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
              Não foi possível fazer login. Verifique suas credenciais!
            </Alert>
          )
        }

      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
  <Alert severity="success">This is a success message!</Alert>*/}

    </Stack>
  );
}