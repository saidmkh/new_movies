import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setPage } from '../../actions/page'

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
  font-weight: ${props => props.active === true ? 'bold' : 500};
  cursor: pointer;
  transition: all 0.2s ease;
  ${props => props.disabled === true ? 'pointer-events: none;' : null}
	
	&:hover {
  background-color: rgb(230, 230, 230);
}
`

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: {}
    }
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.currentPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.currentPage);
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.items !== nextProps.items) {
      if (this.props.items.length && nextProps.items.length
        && this.props.items[0]['title'] !== nextProps.items[0]['title']
      ) {
        return true
      } else if (this.props.items.length !== nextProps.items.length) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  setPage(page) {
    const { items, pageSize } = this.props
    let pages = this.state.pages

    if (page < 1 || page > pages.totalPages) {
      return
    }

    pages = this.getPages(items.length, page, pageSize)

    this.setState({ pages: pages });
    this.props.setPage(page)
    console.log(this.props.currentPage)

    this.props.onChangePage(page);

  }

  getPages(totalItems, currentPage, pageSize) {
    let totalPages = this.props.totalPages
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
    let pageArr = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

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
        <PaginationList>
          <PaginationItem
            disabled={pages.currentPage === 1 ? true : false}
            onClick={() => this.setPage(1)}
            active={true}
          >
            First
          </PaginationItem>
          <PaginationItem
            disabled={pages.currentPage === 1 ? true : false}
            onClick={() => this.setPage(pages.currentPage - 1)}
          >
            Prev
          </PaginationItem>
          {pages.currentPage >= 3 ?
            <PaginationItem
              onClick={() => this.setPage(pages.currentPage - 5)}
            >
              ...
            </PaginationItem>
            : null}

          {pages.pageArr.map((obj, idx) => {
            return (
              <PaginationItem
                key={idx}
                obj={obj}
                onClick={() => this.setPage(obj)}
                active={pages.currentPage === obj ? true : false}
              >
                {obj}
              </PaginationItem>
            )
          })}

          {pages.currentPage <= pages.totalPages - 2 ?
            <PaginationItem
              onClick={() => this.setPage(pages.currentPage + 5)}
            >
              ...
            </PaginationItem>
            : null
          }
          <PaginationItem
            disabled={pages.currentPage === pages.totalPages ? true : false}
            onClick={() => this.setPage(pages.currentPage + 1)}
          >
            Next
          </PaginationItem>
          <PaginationItem
            disabled={pages.currentPage === pages.totalPages ? true : false}
            onClick={() => this.setPage(pages.totalPages)}
            active={true}
          >
            Last
          </PaginationItem>
        </PaginationList>
      </PaginationContainer>
    )
  }
}

const mapStateToProps = store => ({
  totalPages: store.page.totalPages,
  currentPage: store.page.currentPage
})

const mapDispatchToProps = dispatch => ({
  setPage: currentPage => dispatch(setPage(currentPage))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
