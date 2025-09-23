import React from "react";
import PropTypes from "prop-types";
import { Container, Description, Footer, Lang, Name, Link } from "./styles";

function Repository({ repository }) {
  return (
    <Container>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color="#f37272">
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          ver
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Repository;
