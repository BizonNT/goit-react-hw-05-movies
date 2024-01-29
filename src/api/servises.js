import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '3674ab87cc7e60af457a5586f5fcf775',
  },
});

export async function getTrendingMovie() {
  return await instance.get('trending/movie/day').then(resp => resp.data);
}

export async function getMovieById(movieId) {
  return await instance.get(`movie/${movieId}`).then(resp => resp.data);
}

export async function getCastById(movieId) {
  return await instance.get(`movie/${movieId}/credits`).then(resp => resp.data);
}

export async function getReviewsById(movieId) {
  return await instance.get(`movie/${movieId}/reviews`).then(resp => resp.data);
}

export async function getMovieByName(
  movieName,
  page = 1,
  language = 'en-US',
  region = '',
  year = ''
) {
  const options = {
    params: {
      query: movieName,
      include_adult: false,
      language,
      page,
      region,
      year,
    },
  };
  return await instance.get(`search/movie`, options).then(resp => resp.data);
}
