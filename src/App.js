import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'Đi đá bóng', isComplete: true}, 
      {title: 'Đi bơi', isComplete: true}, 
      {title: 'Đi tắm'}
    ];
  }
  render() {
    return(
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item}/>)
        }
        { this.todoItems.length === 0 && "Nothing here."}
      </div>
    );
  }
}

export default App;