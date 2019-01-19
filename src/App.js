import React, { Component } from 'react';
import Header from './components/Header.js';
import CatDisplay from './components/CatDisplay';


class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <CatDisplay/>
      </>
    );
  }
}

export default App;
