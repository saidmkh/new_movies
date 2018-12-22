import { GET_PAGE, SET_TOTAL_PAGES } from './constants'

export const setPage = (currentPage) => ({
    type: GET_PAGE,
    payload: currentPage
})

export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    payload: totalPages
})