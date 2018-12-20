import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    currentPage = currentPage || 1

    pageSize = pageSize || 1


  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
}

export default connect(mapStateToProps)(PaginationComponent)
