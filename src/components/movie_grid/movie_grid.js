import React, { Component } from 'react'
import styled from 'styled-components'

import MovieItem from './movie_item'

const GridTitle = styled.div`
  font-size: 1.8rem;
  color: #888;
  margin-bottom: .75rem;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`

export default class MovieGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    return fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
      .then(res => res.json())
      .then(data => {
        if (data.results.length > 12) {
          data.results.length = 12
        }
        this.setState({
          movies: data.results
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { movies } = this.state
    console.log(movies)
    return (
      <div className="movies__grid">
        <GridTitle>
          Latest Released
        </GridTitle>
        <MoviesContainer>
          {movies.map((obj, idx) => {
            return (
              <MovieItem
                key={idx}
                obj={obj}
                idx={idx}
              />
            )
          })}
        </MoviesContainer>
      </div>
    )
  }
}
