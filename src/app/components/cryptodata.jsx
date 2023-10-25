import { useState, useEffect } from 'react';
import CardComponent from '../components/card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Button } from '@mui/material';
export default function Cardcrypto({ handleAlert, setMsjAlert }) {

  const [data, setData] = useState(null);
  const [lastData, setLastData] = useState(null);

  const searchCrypto = (value) => {
    if (value !== '') {
      const filteredCryptos = data.filter(crypto => crypto.name.toUpperCase().includes(value.toUpperCase()));
      setData(filteredCryptos)
    } else {
      setData(lastData)
    }
  }

  const getData = () => {
    fetch('https://data.messari.io/api/v1/assets')
      .then(response => response.json())
      .then(data => (setData(data.data), setLastData(data.data), handleAlert()))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getData()
  }, []);

  const addedSuccess = () => {
    setMsjAlert('Crypto Added!')
    handleAlert()
  }

  return (
    <>
      {data ?
        (<>
          <Stack spacing={2} direction="row">
            <TextField id="outlined-basic" label="Search a Crypto" variant="outlined" onChange={(event) => { searchCrypto(event.target.value) }} />
            <Button onClick={getData} variant="contained">Refresh Data</Button>
          </Stack><br />
          <Grid container spacing={2}>
            {data.map((crypto) => {
              return (
                <Grid key={crypto.serial_id} item xs={4}>
                  <CardComponent data={crypto} addedSuccess={addedSuccess}  />
                </Grid>
              );
            })}
          </Grid>
        </>) : (
          <Box sx={{ minWidth: '60vw' }}>
            <LinearProgress sx={{ minHeight: '10px' }} />
          </Box>
        )}
    </>
  );
}