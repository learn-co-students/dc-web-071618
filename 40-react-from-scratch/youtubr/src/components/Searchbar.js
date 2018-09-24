import React from "react";
import { Container } from "semantic-ui-react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const Searchbar = props => (
  <Container>
    <SearchInput />
    <SearchButton />
  </Container>
);

export default Searchbar;
