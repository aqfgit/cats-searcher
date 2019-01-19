import React, { Component } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 20px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffffff;
  background: rgb(228, 139, 22);
  border: none;
  border-radius: 10px;
  box-shadow: #333333 1px 2px 3px;

  &:active {
    position: relative;
    top: -1px;
    left: -2px;
  }
`;


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
      <Button onClick={this.handleClick}>Another one!</Button>
    )
  }
}

export default CatsChangerButton
