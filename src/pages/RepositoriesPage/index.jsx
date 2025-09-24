import React, { useState } from "react";

import { Container, SideBar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

function RepositoriesPage() {
  const [currentLanguage, setcurrentLanguage] = useState();

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

  const repositories = [
    {
      id: "1",
      name: "Repo1",
      description: "descrição do repo",
      html_url: "https://github.com/Leonardo-Borges-AF",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo2",
      description: "descrição do repo",
      html_url: "https://github.com/Leonardo-Borges-AF",
      language: "JavaScript",
    },
    {
      id: "3",
      name: "Repo3",
      description: "descrição do repo",
      html_url: "https://github.com/Leonardo-Borges-AF",
      language: "TypeScript",
    },
    {
      id: "4",
      name: "Repo4",
      description: "descrição do repo",
      html_url: "https://github.com/Leonardo-Borges-AF",
      language: "python",
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <SideBar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={(language) => setcurrentLanguage(language)}
        />
      </SideBar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
