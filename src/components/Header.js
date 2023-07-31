import React, { Component } from 'react';
import { styled } from 'styled-components';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>Sistema Solar</h1>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  text-align: center;
`;

export default Header;
