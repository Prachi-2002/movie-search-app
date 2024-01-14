import React, { useState } from 'react';
import { getMovieList } from '../helpers/getMovieList';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const SearchButton = (props) => {
  const [error, setError] = useState('');

  const submitForm = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (props.input.length > 5) {
        try {
          const data = await getMovieList(props.input, 1);
          console.log(data, 'Data ');
          props.setCount(1);
          props.setMovieList(data.result);
          props.setTotal(data.total);
          setError('');
        } catch (error) {
          setError('Error fetching movie list. Please try again.');
        }
      } else {
        setError('String should be greater than or equal to 5 characters');
      }
    }
  };

  const handleChange = async (e) => {
    console.log(e.target.value, 'Value ');
    props.setInput(e.target.value);
    if (e.target.value.length === 0) {
      props.setInput('batman');
      props.setCount(1);
      const movieList = await getMovieList();
      props.setMovieList(movieList.result);
      props.setTotal(movieList.total);
    }
  };

  return (
    <>
      <div className='row text-center px-0 mx-0'>
        <TextField
          style={{ width: "100%", maxWidth: "500px" }}
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => submitForm(e)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default SearchButton;
