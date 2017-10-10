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
  state = {
    todoItems: defaultTodos
  }

  handlerInsert = (name) => {
    this.setState({
      todoItems: [...this.state.todoItems, createItem(name)]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
      </div>
    );
  }
}

export default App;
