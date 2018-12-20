import { GET_PAGE, SET_TOTAL_PAGES } from './constants'

export const setPage = (page) => {
  return {
    type: GET_PAGE,
    payload: page
  }
}

export const setTotalPages = (totalPages) => {
  console.log('totalPages', totalPages)
  return {
    type: SET_TOTAL_PAGES,
    payload: totalPages
  }
}