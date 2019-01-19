import React, { Component } from 'react'
import CatCaption from './CatCaption';
import styled from 'styled-components';

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 500px;
  display: block;
  border: 4px solid rgb(66, 2, 2);
`;

export class CatImage extends Component {
  render() {
    return (
      <Figure>
        <Image src={this.props.imageUrl} alt=""/>
        <CatCaption description={this.props.description}/>
      </Figure>
    )
  }
}

export default CatImage
