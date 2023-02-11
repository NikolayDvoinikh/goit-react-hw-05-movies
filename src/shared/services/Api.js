import axios from 'axios';

const KEY = '9b564f816e5c77cf73acce6dc1fdd0cf';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: KEY,
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getSearchFilms = async (query, page = 1) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getFullMovieInfo = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieActorsInfo = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
