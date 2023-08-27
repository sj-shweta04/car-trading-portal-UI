import { useEffect, useState } from 'react';
import './Style.css'
import { Box, Button, Autocomplete, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Search = (props) => (
  <Autocomplete
    disablePortal
    id={props.id}
    options={props.options}
    onChange={props.onChange}
    sx={{ ...props.style }}
    renderInput={(params) => <TextField {...params} label={props.label} />}
  />
)

const style = { width: 200, pt: 4, pl: 2 }


const SearchPanel = () => {
  const [selected, setSelectedValue] = useState({ searchByCityHome: '', searchByBrand: '' })
  const [cities, setCities] = useState();
  const [brands, setBrands] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/api/cars/city")
      .then((response) => {
        setCities(response.data)
      })
    axios.get("http://localhost:8080/api/cars/brands")
      .then((response) => {
        const brandNames = response.data.map(item => item.brandName);
        setBrands(brandNames)
      })
  }, [])

  const handleAutocompleteChange = (event, newValue) => {
    const id = event.target.id.split('-')[0]
    setSelectedValue({ ...selected, [id]: newValue });
  };

  const navigate = useNavigate()

  const doSearch = () => {
    console.log('search', selected);
    if (selected.searchByBrand) {
      navigate(`/cars/brand/${selected.searchByBrand}`)

    }else if(selected.searchByCityHome)[
      navigate(`/cars/city/${selected.searchByCityHome}`)
    ]

  }
  return (
    <Box component="span" sx={{
      width: 300,
      height: 300,
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 5

    }}>
      <h3 className='head-title'>Find Your Dream Car</h3>
      <Search id={'searchByCityHome'} label={'Search By City'} options={cities} style={style} onChange={handleAutocompleteChange} />
      <Search id={'searchByBrand'} label={'Search By Brand'} options={brands} style={style} onChange={handleAutocompleteChange} />
      <div className='align-btn'>
        <Button variant="contained" onClick={doSearch} sx={{ color: 'text.primary' }}>
          Search
        </Button>
      </div>
    </Box>
  )
}

export default SearchPanel