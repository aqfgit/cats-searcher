import React, { Component } from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  color: #ffffff;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
`;

export class PageTitle extends Component {
  render() {
    return (
      <Title>
        Cats.
      </Title>
    )
  }
}

export default PageTitle
