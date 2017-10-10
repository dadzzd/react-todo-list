import React, { Component } from 'react';
import shortId from 'shortid';

function createItem (name) {
  return {
    id: shortId.generate(),
    name,
    finished: false
  };
}

const defaultTodos = [
  '리액트 시작하기',
  '컴포넌트 이해하기',
  'props/state 사용하기',
  'LifeCycle API'
].map(createItem);
 
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
