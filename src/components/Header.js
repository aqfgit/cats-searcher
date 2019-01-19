import React, { Component } from 'react'
import CatsChangerButton from './CatsChangerButton';
import styled from 'styled-components';
import PageTitle from './PageTitle';

const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(14, 159, 255);
  padding: 20px;
`;

export class Header extends Component {
  render() {
    return (
      <PageHeader>
        <PageTitle/>
        <CatsChangerButton displayRandomImage={this.props.displayRandomImage}/>
      </PageHeader>
    )
  }
}

export default Header
