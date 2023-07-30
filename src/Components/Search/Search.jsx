import { useState } from 'react';
import './Style.css'
import { Box, Button, Autocomplete, TextField } from '@mui/material';
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

  const handleAutocompleteChange = (event, newValue) => {
    const id = event.target.id.split('-')[0]
    setSelectedValue({ ...selected, [id]: newValue });
  };

  const doSearch = () => {
    console.log('search', selected);
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
      <Search id={'searchByCityHome'} label={'Search By City'} options={['car1', 'car2', 'car3']} style={style} onChange={handleAutocompleteChange} />
      <Search id={'searchByBrand'} label={'Search By Brand'} options={['city1', 'city2', 'city3']} style={style} onChange={handleAutocompleteChange} />
      <div className='align-btn'>
        <Button variant="contained" onClick={doSearch} sx={{ color: 'text.primary' }}>Search</Button>
      </div>
    </Box>
  )
}

export default SearchPanel