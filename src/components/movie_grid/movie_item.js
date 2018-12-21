import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getMovie } from '../../actions/movie'

const MoviesItem = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 0;
  flex-basis: 16.66%;
  height: auto;
  border-radius: 6px;
  cursor: pointer;
`

const MovieItemBlock = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
`

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.2);
  }
`

function MovieItem(props) {
  return (
    <MoviesItem onClick={() => props.getMovie(props.obj)}>
      <MovieItemBlock>
        <MovieImg
          src={`http://image.tmdb.org/t/p/w342${props.obj.poster_path}`}
          title={props.obj.title}
          alt=''
        />
      </MovieItemBlock>
    </MoviesItem>
  )
}

const mapStateToProps = store => ({
  movie: store.movie
})

const mapDispatchToProps = dispatch => ({
  getMovie: movie => dispatch(getMovie(movie)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem)
