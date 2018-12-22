import { combineReducers } from 'redux'
import pageReducer from './pages'
import movieReducer from './movie'
import modalReducer from './modal'

export const rootReducer = combineReducers({
  page: pageReducer,
  movie: movieReducer,
  modal: modalReducer
})