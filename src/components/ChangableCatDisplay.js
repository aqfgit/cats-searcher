import React, { Component } from 'react'
import CatDisplay from './CatDisplay';
import Header from './Header';

export class ChangableCatDisplay extends Component {
  render() {
    return (
      <>
      <Header/>
      <CatDisplay/>
      </>
    )
  }
}

export default ChangableCatDisplay
