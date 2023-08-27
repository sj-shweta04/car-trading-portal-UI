import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


export default function Cars({ cars, heading }) {

    return (
        <>
            {cars &&
                <>
                    <Typography gutterBottom mt={2} ml={2} variant="h4" component="div">
                        {heading}
                    </Typography>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {cars.map((c) => (
                            <Grid item key={c.car_id} xs={12} sm={4} md={'auto'} mt={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={'D:\Project DAC\Car Image\Dzire grey.jpg'}
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
                                        <Button size="small" color="primary">
                                            Buy
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