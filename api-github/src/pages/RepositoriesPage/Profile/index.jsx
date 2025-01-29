import React from 'react'

import {MdGroup, MdLocationCity, MdWork} from 'react-icons/md';

import { Avatar, Container, Data, Header, Inner, Login, Name } from './styles'

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/78118687?v=4'/>
        <Login> Login </Login>
        <Name> Leonardo Borges </Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          x <i>seguidores</i> &middot; y <i>seguindot</i>
        </Data>
        <Data> 
          <MdWork size={20}/> 
          Front-End/Web3
        </Data>
        <Data> 
          <MdLocationCity size={20}/> 
          Ribeirão Preto
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile