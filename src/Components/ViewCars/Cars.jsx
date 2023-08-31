import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useState } from 'react';
import Car from './Car';


export default function Cars({ cars, heading }) {

    const [viewCar, setViewCar] = useState(false)
    const [carDetails, setCarDetails] = useState()

    return (
        <>
            {cars &&
                <>
                        <Typography gutterBottom mt={2} ml={2} variant="h4" component="div">
                            {heading}
                        </Typography>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {!viewCar ? cars.map((c) => (
                            <Grid item key={c.car_id} xs={12} sm={4} md={'auto'} mt={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={`http://localhost:8080/api/cars/images/${c.carImage}`}
                                            alt="Car info"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {c.brandId.brandName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Model: {c.model}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Year: {c.year}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Price: {c.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                City: {c.city}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => {
                                            setCarDetails(c);
                                            setViewCar(true)
                                        }}>
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )) : <Car carDetails={carDetails} close={setViewCar} />}
                    </Grid>
                </>
            }
        </>
    );
}