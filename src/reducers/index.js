import { combineReducers } from 'redux'
import pageReducer from './pages'
import movieReducer from './movie'

export const rootReducer = combineReducers({
  page: pageReducer,
  movie: movieReducer
})