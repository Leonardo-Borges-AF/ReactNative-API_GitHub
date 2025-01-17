import React from "react";
import { MdSearch } from "react-icons/md";
import { Button, Container, Form, Input, Logo, Title } from "./styles";

import logo from "../../assets/images/gittHub-logo.svg"




export default function Main() {
  return (
    <Container>
      <Logo src={logo} alt="logo git hub"/>
      <Title>API GitHub</Title>
      <Form>
        <Input placeholder="usuário"/>
        <Button>
          <MdSearch size={42} color="white"/>
        </Button>
      </Form>
    </Container>
  );
}
