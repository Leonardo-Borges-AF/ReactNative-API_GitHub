import React from "react";
import { Container, Description, Footer, Lang, Name, Link } from "./styles";

function Repository() {
  return (
    <Container>
      <Name> Repository Name</Name>
      <Description> Repository description </Description>
      <Footer color="#f37272">
        <Lang>Repository Lang</Lang>
        <Link href="test" target="_blank">
          ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
