import axios from 'axios';

const KEY = '9b564f816e5c77cf73acce6dc1fdd0cf';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '9b564f816e5c77cf73acce6dc1fdd0cf',
    movie_id,
    language: 'en-US',
  },
});

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1 - запрос обзоров для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US - запрос информации о актёрском составе для страницы кинофильма
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US - запрос полной информации о фильме для страницы кинофильма
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false - Search поиск кинофильма по ключевому слову на странице фильмов.
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> - Trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
