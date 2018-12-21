import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setTotalPages } from '../../actions/page'

import MovieItem from './movie_item'

const GridTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #888;
  margin-bottom: .75rem;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`

class MovieGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {

    return fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
      .then(res => res.json())
      .then(data => {
        this.props.setTotalPages(data.total_pages)

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

const mapStateToProps = store => ({
  totalPages: store.page.totalPages,
  currentPage: store.page.currentPage
})

const mapDispatchToProps = dispatch => ({
  setTotalPages: totalPages => dispatch(setTotalPages(totalPages))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGrid)