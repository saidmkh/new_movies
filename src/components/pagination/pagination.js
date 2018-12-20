import React, { Component } from 'react'
import Pagination from 'rc-pagination';
import styled from 'styled-components'

import './pagination.css'

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

const onPageChange = (current, pageSize) => {
  console.log(current)
}

class PagesPagination extends Component {
  render() {
    return (
      <PaginationContainer>
        <Pagination
          showTitle={false}
          total={100}
          itemRender={textItemRender}
          onChange={onPageChange}
        />
      </PaginationContainer>
    )
  }
}

export default PagesPagination
