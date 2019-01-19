import React, { Component } from 'react'
import CatsChangerButton from './CatsChangerButton';
import styled from 'styled-components';
import PageTitle from './PageTitle';

export class Header extends Component {
  render() {
    return (
      <header>
        <PageTitle/>
        <CatsChangerButton displayRandomImage={this.props.displayRandomImage}/>
      </header>
    )
  }
}

export default Header
