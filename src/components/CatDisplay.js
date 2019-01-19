import React, { Component } from 'react'
import CatImage from './CatImage';
import Loader from './Loader';

export class CatDisplay extends Component {
  render() {
    const image = <CatImage imageUrl={this.props.imageUrl} description={this.props.description}/>;
    const loader = <Loader/>;

    const element = this.props.isLoading ? loader : image;
    return (
      <main>
        {element}
      </main>
    )
  }
}

export default CatDisplay
