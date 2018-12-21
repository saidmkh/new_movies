import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';

import Main from './components/main/main'

const AppWrapper = styled.div`
  flex: auto;
`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <Main />
        </AppWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
