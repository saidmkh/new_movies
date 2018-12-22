import { GET_MOVIE, CLOSE_MOVIE } from '../actions/constants'

const initialState = {
  movie: {},
}

export default function movieReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    case CLOSE_MOVIE:
      console.log('close')
      return initialState
    default:
      console.log('close')
      return state
  }
}