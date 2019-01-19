import React, { Component } from 'react'
import CatImage from './CatImage';

export class CatDisplay extends Component {
  render() {
    return (
      <main>
        <CatImage imageUrl={this.props.imageUrl} description={this.props.description}/>
      </main>
    )
  }
}

export default CatDisplay
