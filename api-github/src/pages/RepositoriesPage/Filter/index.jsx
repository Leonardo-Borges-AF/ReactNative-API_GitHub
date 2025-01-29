import React from "react";
import { Clear, Container, Selector } from "./styles";

function Filter() {
  const langs = [
    { name: "Javascript", count: 5, color: "#f1c40f" },
    { name: "Python", count: 5, color: "#a9a4df" },
    { name: "Typescript", count: 5, color: "#1702fa" },
  ];

  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLowerCase()} color={lang.color}>
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Clear>Reset</Clear>
    </Container>
  );
}

export default Filter;
