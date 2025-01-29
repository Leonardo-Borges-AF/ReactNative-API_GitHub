import React from 'react'

import { Container, SideBar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'

function RepositoriesPage () {
  return (
    <Container>
        <SideBar>
            <Profile />
            <Filter/>
        </SideBar>
        <Main>
            Main
        </Main>
        
    </Container>
  )
}

export default RepositoriesPage