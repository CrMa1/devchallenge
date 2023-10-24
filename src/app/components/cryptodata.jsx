import CardComponent from '../components/card';
import Grid from '@mui/material/Grid';

const DATA_URL = "https://data.messari.io/api/v1/assets";

const fetchCryptos = async () => {
  const res = await fetch(DATA_URL);
  return await res.json();
};

export default async function Cardcrypto() {
  const dataCrypto = await fetchCryptos();
  return (
    <>
      <Grid container spacing={2}>
        {dataCrypto.data.map((crypto) => {
          return (
            <Grid key={crypto.id} item xs={4}>
              <CardComponent data={crypto} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
