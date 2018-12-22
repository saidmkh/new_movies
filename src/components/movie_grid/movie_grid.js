import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setTotalPages } from '../../actions/page'
import { loadMovies } from '../../actions/movie'
import MovieItem from './movie_item'
import Pagination from '../pagination/pagintaion'

import store from '../../store/store'

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
      movies: []
    }

    this.onChangePage = this.onChangePage.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
  }

  onChangePage() {
    let page = store.getState().page.currentPage
    if (this.props.currentPage) {
      this.loadMovies(page)
    }
  }

  loadMovies(page) {
    return fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
      .then(res => res.json())
      .then(data => {
        this.props.setTotalPages(data.total_pages)

        if (data.results.length > 12) {
          data.results.length = 12
        }

        this.props.loadMovies(data.results)
        this.setState({
          movies: data.results
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  componentDidMount() {
    this.loadMovies(this.props.currentPage)
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
        <Pagination items={movies} onChangePage={this.onChangePage} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  movies: store.movie.movies,
  totalPages: store.page.totalPages,
  currentPage: store.page.currentPage
})

const mapDispatchToProps = dispatch => ({
  loadMovies: movies => dispatch(loadMovies(movies)),
  setTotalPages: totalPages => dispatch(setTotalPages(totalPages))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieGrid)