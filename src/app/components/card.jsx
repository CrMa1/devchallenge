import * as React from "react";
import { useGlobalContext } from '../context/cryptostore';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardComponent({ data, isFavorite, addedSuccess, deleteAlert }) {
  const { addFavorites, deleteFavorites } = useGlobalContext()
    return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ minHeight: 220 }}>
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Id Crypto: {data.serial_id}
            </Typography>
            <Typography variant="h5" component="div">
              {bull}{data.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data.profile.tagline}
            </Typography>
            <Typography variant="body2">
              ${data.metrics.market_data.price_usd} USD
              <br />
              Last 24 hour: {data.metrics.market_data.percent_change_usd_last_24_hours}%
            </Typography>
          </CardContent>
          <CardActions>
            {isFavorite ?
              <Button onClick={() => {
                (deleteFavorites(data.serial_id), deleteAlert());
              }} size="small">Remove from my favorites</Button>
            :
              <Button onClick={() => {
                (addFavorites(data), addedSuccess());
              }} size="small">Add to My Currencies</Button>
            }
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
