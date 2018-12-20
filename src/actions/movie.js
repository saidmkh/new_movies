import { GET_MOVIE } from './constants'

export const getMovie = (movie) => {
  return {
    type: GET_MOVIE,
    payload: movie
  }
}