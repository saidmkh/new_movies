import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { closeModal } from '../../actions/modal'

const ModalBackground = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  left: 0;
  bottom: 0;
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
`

const ModalNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  padding: 1rem;
  cursor: pointer;

  &:hover ${ModalNavText} {
    color: white;
    font-weight: 500;
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
  font-size: 2rem;
  color: #e8e8e8;
  transition: all 0.3s ease;
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
`

const MovieImageBlock = styled.div`
  margin-right: 4rem;
  height: 300px;  
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
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
              <ModalNavText>Back to list</ModalNavText>
            </ModalNavItem>
            <ModalNavItem>
              <ModalNavText>Next Movie</ModalNavText>
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
  movie: store.movie.movie
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
