import React from "react";
import styled from "styled-components";

const StyleHeader = styled.header`
  padding: 1.2rem 4.8rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
`;
const Header = () => {
  return <StyleHeader>Header</StyleHeader>;
};

export default Header;
