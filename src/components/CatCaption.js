import React, { Component } from 'react'

export class CatCaption extends Component {
  render() {
    return (
      <figcaption>
        {this.props.description}
      </figcaption>
    )
  }
}

export default CatCaption
