import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../header/header'
import MovieGrid from '../movie_grid/movie_grid'
import Pagination from '../pagination/pagination'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  margin-top: 10rem;
  background-color: #efefef;
  padding: 3rem 0;
  min-height: calc(100vh - 10rem);
`

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <MovieGrid />
          <Pagination />
        </Content>
      </Wrapper>
    )
  }
}
