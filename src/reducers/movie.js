import { GET_MOVIE } from '../actions/constants'

const initialState = {
  movie: {}
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movie: action.payload }
    default:
      console.log('def')
      return state
  }
}