import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AboutUs() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="xl" sx={{paddingTop:'30px'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', width:'100vh'}}>
         
        <div style={{paddingTop:'10px',paddingLeft:'10px', paddingRight:'50px'}}>
    <b><i>About Trade-Cars</i></b> <br/>
Trade-Cars is India's leading car search venture that helps users buy second-hand cars that are right for them. Its website and app carry rich automotive content such as detailed specs and prices, pictures of all car brands and models available in India. <br/> 
Trade-Cars has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom. The platform also has used car classifieds wherein users can upload their cars for sale, and find used cars for buying from individuals and used car dealers. <br/>

Our vision is to construct a complete ecosystem for consumers and car manufacturers, dealers and related businesses such that consumers have easy and complete access to buying and selling cars.
    </div>

        </Box>

        
      </Container>
    </React.Fragment>
  );
}