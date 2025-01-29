import React from "react";

import { Container, SideBar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

function RepositoriesPage() {
  return (
    <Container>
      <SideBar>
        <Profile />
        <Filter />
      </SideBar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
