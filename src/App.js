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

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => item.id === id);
    const item = todoItems[index];

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index), // 0~index 전
        { ...item,
          finished: !item.finished
        },
        ...todoItems.slicep(index + 1, todoItems.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => item.id === id);

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index), // 0~index 전
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  }

  handleReset = () => {
    this.setState({
      todoItems: defaultStatus
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
