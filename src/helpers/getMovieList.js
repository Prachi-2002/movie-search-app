import axios from 'axios';

export const getMovieList = async (val ='batman', page=1) => {
    const response = await axios.get(`http://www.omdbapi.com/?apiKey=${process.env.apiKey}&s=${val}&page=${page}`);
    console.log(response, 'Response ');
    const obj = {
        result: response.data.Search,
        total: response.data.totalResults
    }
    return obj;
}
