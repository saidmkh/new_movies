import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../../assets/img/logo.png'

const AppHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #414141;
  z-index: 10;
`

const Container = styled.div`
  max-width: 1230px;
  width: 100%;
  padding: 1.5rem;
  margin: auto;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`

const LogoIcon = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 1.5rem;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`

const AccountText = styled.span`
  font-size: 1.7rem;
  font-weight: 300;
  color: white;
  
  @media (max-width: 500px) {
    display: none;
  }
`

const AccountArrowDown = styled.div`
  margin: 2px 0 0 10px;
  height: 14px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);

  @media (max-width: 500px) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`

const HeaderAccount = styled.div`
  padding: 1rem 1.4rem;
  display: flex;
  border: 1px solid white;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: white;
  }

  &:hover ${AccountText} {
    color: #414141;
  }

  &:hover ${AccountArrowDown} {
    border: solid #414141;
    border-width: 0 2px 2px 0;
  }
`

export default class Header extends Component {
  render() {
    return (
      <AppHeader>
        <Container>
          <HeaderContainer>
            <HeaderLogo as='a' href='/'>
              <LogoIcon />
              <LogoText>Movies</LogoText>
            </HeaderLogo>
            <HeaderAccount>
              <AccountText>My Account</AccountText>
              <AccountArrowDown />
            </HeaderAccount>
          </HeaderContainer>
        </Container>
      </AppHeader>
    )
  }
}
