import React, { Component } from 'react'
import CatsChangerButton from './CatsChangerButton';

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>Cats.</h1>
        <CatsChangerButton displayRandomImage={this.props.displayRandomImage}/>
      </header>
    )
  }
}

export default Header
