import React, { Component } from 'react'
import styled from 'styled-components';

const ImageCaption = styled.figcaption`
  color: #333333;
  letter-spacing: 1.8px;
  text-align: center;
  margin-top: 20px;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 18px;
  max-width: 500px;
`;

export class CatCaption extends Component {
  render() {
    return (
      <ImageCaption>
        {this.props.description}
      </ImageCaption>
    )
  }
}

export default CatCaption
