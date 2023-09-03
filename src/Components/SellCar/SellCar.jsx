import { useFormik } from 'formik';
import * as yup from 'yup';
import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import "./style.css"
import Container from '@mui/material/Container';
import axios from 'axios';
import { LoginContext } from '../Context/LoginContext';
import { useContext, useState } from 'react';
const validationSchema = yup.object({
  sellerEmail: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  categoryName: yup.string().required('please select categoryName'),
  brandName: yup.string().required('Brand Name is a required field'),
  model: yup.string().required('Model Name is a required field'),
  year: yup.string().required('year is a required field'),
  price: yup.number().required('Price is required field'),
  kmsDriven: yup.number().required('Km driven is required field'),
  city: yup.string().required('City is required field'),
  sellerName: yup.string().required('Seller Name is a required field'),
  sellerCity: yup.string().required('Seller City is a required field'),
  sellerAddress: yup.string().required('Address is a required field'),
  phone: yup.string().required('Contact number is a required field'),

});

const SellCar = () => {

  const [alertSuccess , setAlertSuccess] = useState(false);
  const [alertErr , setAlertErr] = useState(false)


  const {user} = useContext(LoginContext)
  console.log('user',user);
  let startYear = 1999;

  const currentYear = new Date().getFullYear();
  const years = [];
  for (startYear; startYear <= currentYear; startYear++) {
    years.push(startYear)
  }
  const formik = useFormik({
    initialValues: {
      sellerEmail: '',
      categoryName: '',
      brandName: '',
      model: '',
      year: '',
      mileage: '',
      color: '',
      price: '',
      fuelType: '',
      kmsDriven: '',
      city: '',
      sellerName: '',
      sellerCity: '',
      address: '',
      phone: '',
      sellerAddress: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('ddd');
      const payload = {
          "categoryId": {
              
              "categoryName": values.categoryName
          },
          "brandId": {
              
              "brandName": values.brandName
          },
          "sellerId": {
              
              "sellerName": values.sellerName,
              "email": values.sellerEmail,
              "user_id": {
                  
                  "email": user.email
                  
              },
              "address": values.sellerAddress,
              "city": values.sellerCity,
              "phone": values.phone
          },
          "model": values.model,
          "year": values.year,
          "mileage": values.mileage,
          "color": values.color,
          "price": values.price,
          "fuelType": values.fuelType,
          "kmsDriven": values.kmsDriven,
          "carImage": "Dzire grey.jpg",
          "city": values.city
      }
      axios.post('http://localhost:8080/api/cars/registerCar',payload
      ).then((respose)=>{
        if(respose.status === 200){
          setAlertSuccess(true)
        }
      }).catch(e=>{
        setAlertErr(true)
      })
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1 className='header'>Sell Car</h1>
      <Container maxWidth="sm" sx={{ paddingTop: '10vh' , paddingBottom:'10vh' }}>
        <form onSubmit={formik.handleSubmit}>
          <div className="header2">Fill Car Details</div>

          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="categoryNameLabel">Category</InputLabel>
              <Select
                sx={{ minWidth: 200 }}
                labelId="categoryNameLabel"
                id="categoryName"
                name="categoryName"
                value={formik.values.categoryName}
                label="categoryName"
                onChange={formik.handleChange}
                error={formik.touched.categoryName && Boolean(formik.errors.categoryName)}
                helperText={formik.touched.categoryName && formik.errors.categoryName}
              >
                <MenuItem value={'Hatchback'}>Hatchback</MenuItem>
                <MenuItem value={'Sedan'}>Sedan</MenuItem>
                <MenuItem value={'SUV'}>SUV</MenuItem>
                <MenuItem value={'Pickup Truck'}>Pickup Truck</MenuItem>

              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="year">Year of manufaturing</InputLabel>

              <Select
                sx={{ minWidth: 200 }}
                labelId="year"
                id="year"
                name="year"
                value={formik.values.year}
                label="year"
                onChange={formik.handleChange}
                error={formik.touched.year && Boolean(formik.errors.year)}
                helperText={formik.touched.year && formik.errors.year}
              >
                {
                  years.map((y, i) => {
                    return (<MenuItem key={i} value={y}>{y}</MenuItem>)
                  })
                }

              </Select>
            </FormControl>

            <TextField
              sx={{ minWidth: 200 }}
              fullWidth
              id="brandName"
              name="brandName"
              label="Brand Name"
              value={formik.values.brandName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.brandName && Boolean(formik.errors.brandName)}
              helperText={formik.touched.brandName && formik.errors.brandName}
            />
            <TextField
              sx={{ minWidth: 200 }}
              fullWidth
              id="model"
              name="model"
              label="Model Name"
              value={formik.values.model}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.model && Boolean(formik.errors.model)}
              helperText={formik.touched.model && formik.errors.model}
            />

            <TextField
              sx={{ maxWidth: 200 }}
              fullWidth
              id="mileage"
              name="mileage"
              label="Mileage"
              value={formik.values.mileage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputProps={{ min: 1 }}
              type="number" />

            <TextField
              sx={{ maxWidth: 200 }}
              fullWidth
              id="color"
              name="color"
              label="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              sx={{ maxWidth: 200 }}
              fullWidth
              id="price"
              name="price"
              label="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              inputProps={{ min: 5000 }}
              type="number" />
            <FormControl>
              <InputLabel id="fuelType">Fuel Type</InputLabel>
              <Select
                sx={{ minWidth: 200 }}
                labelId="fuelType"
                id="fuelType"
                name="fuelType"
                value={formik.values.fuelType}
                label="fuelType"
                onChange={formik.handleChange}
                error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
                helperText={formik.touched.fuelType && formik.errors.fuelType}
              >
                <MenuItem value={'Petrol'}>Petrol</MenuItem>
                <MenuItem value={'Diesel'}>Diesel</MenuItem>
                <MenuItem value={'CNG'}>CNG</MenuItem>
                <MenuItem value={'EV'}>EV</MenuItem>

              </Select>
            </FormControl>
            <TextField
              sx={{ maxWidth: 200 }}
              fullWidth
              id="kmsDriven"
              name="kmsDriven"
              label="Kms Driven"
              value={formik.values.kmsDriven}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.kmsDriven && Boolean(formik.errors.kmsDriven)}
              helperText={formik.touched.kmsDriven && formik.errors.kmsDriven}
              type="number" />

            <TextField
              sx={{ maxWidth: 200 }}
              fullWidth
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />


          </Stack>

          <hr />

          <div className="header2" style={{ marginTop: '20px' }}>Fill Seller Details</div>

          <TextField
            sx={{ minWidth: 200, marginTop: '25px' }}
            fullWidth
            id="sellerName"
            name="sellerName"
            label="Seller Name"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.sellerName && formik.errors.sellerName}
          />

          <TextField
            sx={{ marginTop: '25px' }}
            fullWidth
            id="sellerCity"
            name="sellerCity"
            label="Seller City"
            value={formik.values.sellerCity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerCity && Boolean(formik.errors.sellerCity)}
            helperText={formik.touched.sellerCity && formik.errors.sellerCity}
          />
          <TextField
            sx={{ marginTop: '25px' }}
            fullWidth
            id="sellerEmail"
            name="sellerEmail"
            label="Seller Email"
            value={formik.values.sellerEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerEmail && Boolean(formik.errors.sellerEmail)}
            helperText={formik.touched.sellerEmail && formik.errors.sellerEmail}
          />
          <TextField
            sx={{ maxWidth: 300, marginTop: '25px' }}
            fullWidth
            id="phone"
            name="phone"
            label="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            sx={{ marginTop: '25px' }}
            fullWidth
            id="sellerAddress"
            name="sellerAddress"
            label="Seller Address"
            multiline={true}
            rows={4}
            value={formik.values.sellerAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerAddress && Boolean(formik.errors.sellerAddress)}
            helperText={formik.touched.sellerAddress && formik.errors.sellerAddress}
          />
          <Button sx={{ marginTop: '25px' }} color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
          {alertErr && <Alert severity="error">Something Went Wrong</Alert>}
          {alertSuccess && <Alert severity="success">You Have Registred Car Successfully</Alert>}
        </form>
      </Container>
    </div >
  );
};

export default SellCar;


