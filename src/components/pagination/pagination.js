import React, { Component } from 'react'
import Pagination from 'rc-pagination';
import styled from 'styled-components'

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

class PagesPagination extends Component {
  render() {
    return (
      <PaginationContainer>
        <Pagination
          showTitle={false}
          total={100}
          itemRender={textItemRender}
        />
      </PaginationContainer>
    )
  }
}

export default PagesPagination
