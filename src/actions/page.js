import { GET_PAGE, SET_TOTAL_PAGES } from './constants'

export const setPage = (currentPage) => {
  console.log(currentPage)
  return {
    type: GET_PAGE,
    payload: currentPage
  }
}

export const setTotalPages = (totalPages) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: totalPages
  }
}