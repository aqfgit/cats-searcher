import React, { Component } from 'react'
import CatDisplay from './CatDisplay';
import Header from './Header';

export class ChangableCatDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      description: '',
      isLoading: false
    };
  }

  displayRandomImage(event) {
    this.setState({ isLoading: true });
    this.getRandomImage()
      .then(data => {
        this.setState({
          imageUrl: data.imageUrl,
          description: data.description,
          isLoading: false
        });
      })
      .catch(error => console.log(error))
  }

  async getRandomImage() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const apiOptions = {
      headers: {
        'x-api-key': 'b9425ba2-0e8a-4121-a308-f9006769d3a1',
      },
      method: 'GET',
    }

    let description;
    let imageUrl;

    try {
      const response = await fetch(url, apiOptions).then(res => res.json());
      imageUrl = response[0].url;
      description = response[0].breeds[0].description;
    } catch (error) {
        console.log('This photo does not have a description.')
        description = 'Just a random cat.'
    }

    const catData = {
      imageUrl,
      description
    }

    return catData;
      
    }

  render() {
    return (
      <>
      <Header displayRandomImage={this.displayRandomImage.bind(this)}/>
      <CatDisplay imageUrl={this.state.imageUrl} description={this.state.description} isLoading={this.state.isLoading}/>
      </>
    )
  }
}

export default ChangableCatDisplay
