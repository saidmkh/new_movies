import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../header/header'
import MovieGrid from '../movie_grid/movie_grid'

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

const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  padding: 1.5rem;
  margin: auto;
`

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            <MovieGrid />
          </Container>
        </Content>
      </Wrapper>
    )
  }
}
