import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { closeModal } from '../../actions/modal'
import { getMovie } from '../../actions/movie'

const ModalBackground = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  left: 0;
  bottom: -2px;
  z-index: 9;
  background-color: rgba(30, 37, 86, 0.7);
`

const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  padding: 1.5rem;
  margin: auto;
`

const ModalNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`

const ModalNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  transition: all 0.5s;

  &:hover  {
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    width: 95px;
  }
`

const ArrowBlock = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    border: 0;
  }
`

const ModalArrow = styled.div`
  height: 10px;
  border: solid #e8e8e8;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: ${props => props.arrow === 'right' ? 'rotate(320deg)'
    : props.arrow === 'left' ? 'rotate(135deg)'
      : ''};
`

const ModalNavText = styled.div`
  padding-bottom: 3px;
  font-size: 2rem;
  color: #e8e8e8;
  transition: all 0.3s ease;
`

const NavHideText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`

const ModalMovieContainer = styled.div`
  max-width: 950px;
  width: 100%;
  margin: auto;
  padding: 25px;
`

const ModalMovieBlock = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const MovieImageBlock = styled.div`
  margin-right: 4rem;
  height: 300px;  

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`

const MovieImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 100%;
`

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const MovieTitle = styled.div`
  font-size: 3.6rem;
  color: white;
`

const MovieDetail = styled.div`
  display: flex;
  padding: 1rem 0 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const MovieDetailItem = styled.div`
  font-size: 1.8rem;
  color: white;
  border-right: 1px solid white;
  margin-right: 7px;
  padding-right: 1rem;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 800px) {
    border-right: 0;
  }
`

const MovieDescription = styled.div`
  font-size: 1.4rem;
  color: white;
  padding: 1.5rem 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`



class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.nextMovie = this.nextMovie.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  nextMovie() {
    let nextMovieId = this.props.movieId + 1

    if (nextMovieId >= this.props.movies.length) {
      return false
    }

    this.props.getMovie({
      movie: this.props.movies[nextMovieId],
      movieId: nextMovieId
    })
  }

  render() {
    const { movie } = this.props
    let movie_year = movie.release_date.substring(0, movie.release_date.indexOf('-'))
    return (
      <ModalBackground>
        <Container>
          <ModalNavBlock>
            <ModalNavItem onClick={() => this.props.closeModal()}>
              <ArrowBlock>
                <ModalArrow arrow='left' />
              </ArrowBlock>
              <ModalNavText>Back<NavHideText> to list</NavHideText></ModalNavText>
            </ModalNavItem>
            <ModalNavItem onClick={this.nextMovie}>
              <ModalNavText>Next<NavHideText> Movie</NavHideText></ModalNavText>
              <ArrowBlock>
                <ModalArrow arrow='right' />
              </ArrowBlock>
            </ModalNavItem>
          </ModalNavBlock>
          <ModalMovieContainer>
            <ModalMovieBlock>
              <MovieImageBlock>
                <MovieImg src={movie.poster_path ? `http://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : `https://www.fyimusicnews.ca/sites/default/files/default_images/no-image-available.png`}
                  alt=''
                />
              </MovieImageBlock>
              <MovieInfo>
                <MovieTitle>{movie.title} ({movie_year})</MovieTitle>
                <MovieDetail>
                  <MovieDetailItem>Score:  {movie.vote_average}</MovieDetailItem>
                  <MovieDetailItem>Rating:  {movie.adult === false ? 'PG-13' : 'R'}</MovieDetailItem>
                  <MovieDetailItem>Release date: {moment(movie.release_date).format('ll')}</MovieDetailItem>
                </MovieDetail>
                <MovieDescription>{movie.overview}</MovieDescription>
              </MovieInfo>
            </ModalMovieBlock>
          </ModalMovieContainer>
        </Container>
      </ModalBackground>
    )
  }
}

const mapStateToProps = store => ({
  movie: store.movie.movie,
  movies: store.movie.movies,
  movieId: store.movie.movieId
})

const mapDispatchToProps = dispatch => ({
  getMovie: movie => dispatch(getMovie(movie)),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
