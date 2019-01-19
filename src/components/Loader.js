import React, { Component } from 'react'
import styled from 'styled-components';

const LoaderCircle = styled.div`
  @keyframes rotateLoading {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }

  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px dashed rgb(228, 139, 22);

  animation-name: rotateLoading;
  animation-iteration-count:infinite;
  animation-duration: 1s;
`;

export class Loader extends Component {
  render() {
    return (
      <LoaderCircle/>
    )
  }
}

export default Loader
