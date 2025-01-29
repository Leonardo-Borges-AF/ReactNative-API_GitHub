import React from "react";

import { Container, SideBar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

function RepositoriesPage() {
  const user = {
    login: "Leonardo-Borges-AF",
    avatar_url: "https://avatars.githubusercontent.com/u/78118687?v=4",
    followers: 4,
    following: 4,
    company: null,
    blog: "",
    location: "Bandeirantes - PR",
    name: "Leonardo Borges Arias Ferreira",
  };
  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter />
      </SideBar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
