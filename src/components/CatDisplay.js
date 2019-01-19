import React, { Component } from 'react'
import CatImage from './CatImage';
import Loader from './Loader';
import styled from 'styled-components';

const Display = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #ffffff;
  padding: 50px;
`

export class CatDisplay extends Component {
  render() {
    const image = <CatImage imageUrl={this.props.imageUrl} description={this.props.description}/>;
    const loader = <Loader/>;

    const element = this.props.isLoading ? loader : image;
    return (
      <Display>
        {element}
      </Display>
    )
  }
}

export default CatDisplay
