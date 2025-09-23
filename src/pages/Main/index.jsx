import React, { useState } from "react";

import { MdSearch } from "react-icons/md";
import { Button, Container, Form, Input, Logo, Title } from "./styles";
import logo from "../../assets/images/gittHub-logo.svg";

export default function Main() {
  const [login, setLogin] = useState("");
  return (
    <Container>
      <Logo src={logo} alt="logo git hub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="white" />
        </Button>
      </Form>
    </Container>
  );
}
