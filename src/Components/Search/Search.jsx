import React from 'react'
import './Style.css'
import { Box, Button, Autocomplete, TextField } from '@mui/material';
const Search = () => {
  return (
    <Box component="span" sx={{
      width: 300,
      height: 300,
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius:5

    }}>
      <h3 className='head-title'>Find Your Dream Car</h3>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['car1', 'car2']}
        sx={{ width: 200, pt: 4, pl: 2 }}
        renderInput={(params) => <TextField {...params} label="Search By City" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['brand1', 'brand2']}
        sx={{ width: 200, pt: 4, pl: 2 }}
        renderInput={(params) => <TextField {...params} label="Search By Brand" />}
      />
      <div className='align-btn'>
        <Button variant="contained" sx={{ color: 'text.primary' }}>Search</Button>
      </div>
    </Box>
  )
}

export default Search