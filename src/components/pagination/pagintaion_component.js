import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PaginationList = styled.div`
  display: flex;
  border: 1px solid rgb(150, 150, 150);
	border-radius: 3px;
	padding: 1px;
`

const PaginationItem = styled.div`
  list-style-type: none;
  user-select: none;
  padding: 1rem 2rem;
  border-right: 1px solid rgb(150, 150, 150);
  color: ${props => props.active ? 'rgb(0, 185, 0)' : 'silver'};
  font-size: 1.6rem;
  font-weight: ${props => props.active ? 'bold' : 500};
  cursor: pointer;
  transition: all 0.2s ease;
  ${props => props.disabled ? 'pointer-events: none;' : null}
	
	&:hover {
  background-color: rgb(230, 230, 230);
}
`

class PaginationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: {}
    }
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }
  }

  setPage(page) {
    const { items, pageSize } = this.props
    let pages = this.state.pages

    if (page < 1 || page > pages.totalPages) {
      return
    }

    pages = this.getPages(items.length, page, pageSize)

    let pageOfItems = items.slice(pages.startIndex, pages.endIndex + 1);

    this.setState({ pages: pages });

    this.props.onChangePage(pageOfItems);
  }

  getPages(totalItems, currentPage, pageSize) {
    let totalPages = this.props.totalPages
    let currentPage = this.props.currentPage
    let startPage, endPage

    pageSize = pageSize || 3

    if (this.props.totalPages <= 0) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 2) {
        startPage = 1
        endPage = 3
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2
        endPage = totalPages
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    let startIndex = (currentPage - 1) * pageSize
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    let pageArr = Array.from({ totalPages }, x => x + 1)
    console.log('pages', pageArr)

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pageArr: pageArr
    }
  }

  render() {
    const pages = this.state.pages

    if (!pages.pageArr || pages.pageArr.length <= 1) {
      return null
    }

    return (
      <PaginationContainer>
      </PaginationContainer>
    )
  }
}

const mapStateToProps = store => ({
  totalPages: store.page.totalPages,
  currentPage: store.currentPage
})

export default connect(mapStateToProps)(PaginationComponent)
