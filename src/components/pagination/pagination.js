import React, { Component } from 'react'
import Pagination from 'rc-pagination';
import styled from 'styled-components'

import './pagination.scss'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const textItemRender = (current, type, element) => {
  if (type === 'prev') {
    return 'Prev';
  }
  if (type === 'next') {
    return 'Next';
  }
  return element;
};

const onPageChange = (current) => {
  console.log(current)
}

class PagesPagination extends Component {
  render() {
    return (
      <PaginationContainer>
        <div className="pagination-list">
          <div className="pagination-first-item" onClick={}>First</div>
          <Pagination
            showTitle={false}
            total={100}
            itemRender={textItemRender}
            onChange={onPageChange}
          />
          <div className="pagination-last-item">Last</div>
        </div>
      </PaginationContainer>
    )
  }
}

export default PagesPagination
