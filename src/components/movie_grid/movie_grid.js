import React, { Component } from 'react'
import styled from 'styled-components'

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
          data.results = 12
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
    return (
      <div>

      </div>
    )
  }
}
