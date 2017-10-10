import React, { Component } from 'react';
import shortId from 'shortid';

function createItem (name) {
  return {
    id: shortId.generate(),
    name,
    finished: false
  };
}

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
