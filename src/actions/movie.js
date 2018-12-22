import { GET_MOVIE, CLOSE_MOVIE } from './constants'

export const getMovie = (movie) => {
  return {
    type: GET_MOVIE,
    payload: movie
  }
}

export const closeMovie = () => {
  console.log('act close')
  return {
    type: CLOSE_MOVIE
  }
}