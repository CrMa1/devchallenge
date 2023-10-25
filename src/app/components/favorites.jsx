import React, { useState, forwardRef } from 'react';
import CardComponent from '../components/card';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../context/cryptostore';
import { Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function MyFavorites() {

  const { favorites } = useGlobalContext()

  const deleteAlert = () => {
    setMsjAlert('Crypto Deleted!')
    handleAlert()
  }

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
    <>
      {favorites ?
        (<>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {msjAlert}
            </Alert>
          </Snackbar>
          <Box sx={{ minWidth: '60vw', fontSize: 28, color: 'black' }}>
            Your favorites Cryptos
          </Box><br />
          <Grid container spacing={2}>
            {favorites.map((crypto) => {
              return (
                <Grid key={crypto.id} item xs={4}>
                  <CardComponent data={crypto} isFavorite={true} deleteAlert={deleteAlert} />
                </Grid>
              );
            })}
          </Grid>
        </>) : (
          <Box sx={{ minWidth: '60vw' }}>
            Add some favorites Cryptos
          </Box>
        )}
    </>
  );
}