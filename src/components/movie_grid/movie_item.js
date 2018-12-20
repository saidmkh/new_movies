import React from 'react'
import styled from 'styled-components'

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

export default function MovieItem(props) {
  return (
    <MoviesItem>
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
