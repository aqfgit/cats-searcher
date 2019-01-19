import React, { Component } from 'react'

export class CatsChangerButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.displayRandomImage(event);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Another one!</button>
    )
  }
}

export default CatsChangerButton
