import React, { Component } from 'react';


import './App.scss';
import ProductContainer from "./components/ProductContainer";
 



class App extends Component {
    

  render() {

    return (
      <div className="App">
        <ProductContainer />
      </div>
    );
  }
}

export default App;
