import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cars() {
    const [cars, setCars] = useState();
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then((response) => {
                setCars(response.data.data)
            })
    }, [])
    console.log(
        cars
    );
    return (
        <>
            {cars &&
            <>
               <Typography gutterBottom mt={2} ml={2} variant="h4" component="div">
               All Cars
              </Typography>
               <Grid container spacing={2} alignItems="center" justifyContent="center">
               {cars.map((c) => (
                   <Grid item key={c.id} xs={12} sm={4} md={'auto'} mt={3}>
                       <Card sx={{ maxWidth: 345 }}>
                           <CardActionArea>
                               <CardMedia
                                   component="img"
                                   height="140"
                                   image={c.avatar}
                                   alt="Car info"
                               />
                               <CardContent>
                                   <Typography gutterBottom variant="h5" component="div">
                                       {c.first_name}
                                   </Typography>
                                   <Typography variant="body2" color="text.secondary">
                                       email: {c.email}
                                   </Typography>
                               </CardContent>
                           </CardActionArea>
                           <CardActions>
                               <Button size="small" color="primary">
                                   View
                               </Button>
                           </CardActions>
                       </Card>
                   </Grid>
               ))}
           </Grid>
           </>
            }
        </>
    );
}