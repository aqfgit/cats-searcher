import React, { Component } from 'react'
import CatCaption from './CatCaption';

export class CatImage extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.imageUrl} alt=""/>
        <CatCaption description={this.props.description}/>
      </figure>
    )
  }
}

export default CatImage
