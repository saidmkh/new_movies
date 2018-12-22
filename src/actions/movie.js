import { GET_MOVIE, LOAD_MOVIES } from './constants'

export const getMovie = (movie, movieId) => ({
  type: GET_MOVIE,
  payload: movie, movieId
})

export const loadMovies = (movies) => ({
  type: LOAD_MOVIES,
  payload: movies
})