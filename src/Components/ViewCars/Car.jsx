/* eslint-disable react/prop-types */
import CssBaseline from '@mui/material/CssBaseline';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import './styles.css';
export default function Car({ carDetails, close }) {

  console.log(carDetails);

  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingBottom: "25px" }} fixed>
        
        <CardMedia
          component="img"
          height="500"
          width="50"
          image={`http://localhost:8080/api/cars/images/${carDetails.carImage}`}
          alt="Car info"
        />
        <Box sx={{ bgcolor: '#cfe8fc', height: '55vh' }} >
        <Button sx={{marginRight:'5px'}} onClick={()=>close(false)}>Close</Button>
          
        <div className='display'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {carDetails.brandId.brandName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Model: {carDetails.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year: {carDetails.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {carDetails.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              City: {carDetails.city}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Owner&apos;s Info
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Name: {carDetails.sellerId.sellerName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {carDetails.sellerId.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {carDetails.sellerId.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              City: {carDetails.sellerId.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: {carDetails.sellerId.address}
            </Typography>
          </CardContent>
          </div>

           

        </Box>
      </Container>
    </>
  );
}