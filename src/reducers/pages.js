import { GET_PAGE, SET_TOTAL_PAGES } from '../actions/constants'

const initialState = {
  totalPages: 0,
  currentPage: 1,
}

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload
      }

    default:
      return state
  }
}