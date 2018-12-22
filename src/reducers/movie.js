import { GET_MOVIE, LOAD_MOVIES } from '../actions/constants'

const initialState = {
  movie: {},
  movieId: null,
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        movieId: action.payload.movieId
      }
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state
  }
}