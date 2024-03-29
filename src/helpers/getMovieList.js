import axios from 'axios';

export const getMovieList = async (val ='batman', page=1) => {
    const response = await axios.get(`https://www.omdbapi.com/?apiKey=ff24d901&s=${val}&page=${page}`,
    );
    const obj = {
        result: response.data.Search,
        total: response.data.totalResults
    }
    return obj;
}
