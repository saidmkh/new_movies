import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';

import Main from './components/main/main'

const AppWrapper = styled.div`
  flex: auto;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Main />
      </AppWrapper>
    );
  }
}

export default App;
