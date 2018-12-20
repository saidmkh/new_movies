import { combineReducers } from 'redux'
import pageReducer from './pages'

export const rootReducer = combineReducers({
  page: pageReducer,
})