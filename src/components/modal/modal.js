import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: relative;
  top: 10rem;
  right: 0;
  left: 0;
  bottom: 0;
`

const ModalImageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  filter: blur(10px);
`

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
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
  width: 150px;
`

const ArrowBlock = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalArrow = styled.div`
  margin: 2px 0 0 10px;
  height: 14px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: ${props => props.arrow === 'right' ? 'rotate(90deg)'
    : props.arrow === 'left' ? 'rotate(180deg)'
      : ''};
`

const ModalNavText = styled.div`
  font-size: 2rem;
  color: #999;
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
  width: 200px;
  height: 300px;  
`

const MovieImg = styled.img`
  object-fit: cover;
  width: 100%;
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
`

const MovieDescription = styled.div`
  font-size: 1.4rem;
  color: white;
  padding: 1.5rem 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`



class Modal extends Component {
  render() {
    return (
      <ModalBackground>
        <ModalImageBackground>
          <BackgroundImage src={this.props.movie.movie.poster_path ? `http://image.tmdb.org/t/p/w342${props.obj.poster_path}`
            : `https://www.fyimusicnews.ca/sites/default/files/default_images/no-image-available.png`}
            alt=''
          />
          <Container>
            <ModalNavBlock>
              <ModalNavItem>
                <ArrowBlock>
                  <ModalArrow arrow='left' />
                </ArrowBlock>
                <ModalNavText>Back to list</ModalNavText>
              </ModalNavItem>
              <ModalNavItem>
                <ArrowBlock>
                  <ModalArrow arrow='left' />
                </ArrowBlock>
                <ModalNavText>Next Movie</ModalNavText>
              </ModalNavItem>
            </ModalNavBlock>
            <ModalMovieContainer>
              <ModalMovieBlock>
                <MovieImageBlock>
                  <MovieImg src={this.props.movie.movie.poster_path ? `http://image.tmdb.org/t/p/w342${props.obj.poster_path}`
                    : `https://www.fyimusicnews.ca/sites/default/files/default_images/no-image-available.png`}
                    alt=''
                  />
                </MovieImageBlock>
                <MovieInfo>
                  <MovieTitle>{this.props.movie.movie.title}</MovieTitle>
                </MovieInfo>
                <MovieDetail>
                  <MovieDetailItem>{this.props.movie.movie.vote_average}</MovieDetailItem>
                  <MovieDetailItem>{this.props.movie.movie.adult}</MovieDetailItem>
                  <MovieDetailItem>{this.props.movie.movie.release_date}</MovieDetailItem>
                </MovieDetail>
                <MovieDescription>{this.props.movie.movie.overview}</MovieDescription>
              </ModalMovieBlock>
            </ModalMovieContainer>
          </Container>
        </ModalImageBackground>
      </ModalBackground>
    )
  }
}

const mapStateToProps = store => ({
  movie: store.movie
})

export default connect(mapStateToProps)(Modal)
