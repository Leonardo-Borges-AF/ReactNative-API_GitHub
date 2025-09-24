import React from "react";
import PropTypes from "prop-types";

import { Clear, Container, Selector } from "./styles";
import { langColors } from "../../../services/config";

function Filter({ languages, currentLanguage, onClick }) {
  const selectors = languages.map(({ name, count }) => {
    const color = langColors[name];
    return (
      <Selector
        key={name.toLowerCase()}
        color={color}
        className={currentLanguage === name ? "selected" : ""}
        onClick={() => onClick && onClick(name)}
      >
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    );
  });

  return (
    <Container>
      {selectors}
      <Clear onClick={() => onClick && onClick(undefined)}>Reset</Clear>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
