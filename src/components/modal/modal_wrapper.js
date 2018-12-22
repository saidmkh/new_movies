import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Modal from './modal'

const ModalImageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 8;
  background-color: rgba(30, 37, 86, 0.7);
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(13px);
`

class ModalWrapper extends Component {
  render() {
    console.log(this.props.modal.isOpen)
    if (this.props.modal.isOpen) {
      return (
        <React.Fragment>
          <Modal />
          <ModalImageBackground>
            <BackgroundImage src={this.props.movie.poster_path ? `http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`
              : `https://www.fyimusicnews.ca/sites/default/files/default_images/no-image-available.png`}
              alt=''
            />
          </ModalImageBackground>
        </React.Fragment>
      )
    }
    return null
  }
}


const mapStateToProps = store => ({
  modal: store.modal,
  movie: store.movie.movie,
  backgroundImage: store.movie.movie.poster_path
})

export default connect(mapStateToProps)(ModalWrapper)

