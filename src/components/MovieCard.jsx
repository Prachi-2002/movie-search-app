import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchButton from './SearchButton';
import './MovieCard.css';
import Pagination from './Pagination';
import { getMovieList } from '../helpers/getMovieList';

const MovieCard = () => {
  const [movieList, setMovieList] = useState([]);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState('batman');
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await getMovieList();
        setMovieList(response.result);
        setTotal(Number(response.total));
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <div className='cutsom-width px-4 mx-4 mt-4 mb-5'>
      <div className='d-flex justify-content-between align-items-center mr-2'>
        <h4 className='px-3'>Movies List</h4>
        <SearchButton
          className=''
          input={input}
          setInput={setInput}
          movieList={movieList}
          setMovieList={setMovieList}
          total={total}
          setTotal={setTotal}
          count={count}
          setCount={setCount}
        />
      </div>
      <Row className=''>
        {movieList.map((movie) => (
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} xl={2.4} className='mb-3'>
            <div className='shadow p-2 m-2 movie-card'>
              <img
                className='card-img-top img-fluid'
                src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/500x750?text=No+Image+Available' : movie.Poster}
                alt={`Poster for ${movie.Title}`}
              />
              <div className='card-body'>
                <h6 className='card-title'>{movie.Title}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>


      <Row className='justify-content-end mt-4'>
        <Pagination
          input={input}
          setInput={setInput}
          movieList={movieList}
          setMovieList={setMovieList}
          total={total}
          setTotal={setTotal}
          count={count}
          setCount={setCount}
        />
      </Row>
    </div>
  );
};

export default MovieCard;