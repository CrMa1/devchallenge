"use client"
import React, { useState, forwardRef } from 'react';
import styles from './page.module.css'
import Cardcrypto from './components/cryptodata';
import ResponsiveDrawer from './components/navigation';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Home(props) {

  const [open, setOpen] = useState(false);
  const [msjAlert, setMsjAlert] = useState('Updated data!');

  const handleAlert = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <main className={styles.main}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {msjAlert}
        </Alert>
      </Snackbar>
      <ResponsiveDrawer contentPage={<Cardcrypto handleAlert={handleAlert} setMsjAlert={setMsjAlert} />} />
    </main>
  );
}


export default Home;
