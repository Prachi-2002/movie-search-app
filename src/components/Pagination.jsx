import React from 'react';
import { getMovieList } from '../helpers/getMovieList';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Pagination(props) {
  const { count, setCount, total, input, setMovieList } = props;

  const isDisabled = count === 1;
  const nextDisabled = count * 10 > total;

  const handlePagination = async (newCount) => {
    if (newCount >= 1 && newCount <= Math.ceil(total / 10)) {
      const data = await getMovieList(input, newCount);
      setCount(newCount);
      setMovieList(data.result);
    }
  };

  return (
    <div className='d-flex justify-space-between px-4'>
      <div
        onClick={() => handlePagination(count - 1)}
        style={{
          display: 'flex',
          backgroundColor :isDisabled ? 'white': 'black',
          color :isDisabled ? 'black': 'white',
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: '214px', // Adjust the margin as needed
          padding: '8px 17px',
          borderRadius: '50px',
          flex: 1, // Use flex to make both divs equal width
        }}
      >
        <ArrowBackIosIcon style={{ color: isDisabled ? 'black' : 'inherit', opacity: isDisabled ? 0.5 : 1, marginRight:'4px' }} disabled={isDisabled} />
        <span style={{ color: isDisabled ? 'black' : 'inherit', opacity: isDisabled ? 0.5 : 1, marginRight:'4px' }}>Prev</span>
      </div>

      <div
        onClick={() => handlePagination(count + 1)}
        style={{
          display: 'flex',
          backgroundColor :nextDisabled ? 'white': 'black',
          color :nextDisabled ? 'black': 'white',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '8px 17px',
          borderRadius: '50px',
          flex: 1, // Use flex to make both divs equal width
        }}
      >
        <span style={{ color: nextDisabled ? 'black' : 'inherit', opacity: nextDisabled ? 0.5 : 1, marginLeft: '4px' }}>Next</span>
        <ArrowForwardIosIcon style={{ color: nextDisabled ? 'black' : 'inherit', opacity: nextDisabled ? 0.5 : 1, marginLeft: '4px' }} />
      </div>
    </div>
  );
}

export default Pagination;
