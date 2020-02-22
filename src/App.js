import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(state) {
    super(state);
    this.state = {
      todoItems : [
        {title: 'Đi đá bóng', isComplete: true}, 
        {title: 'Đi bơi', isComplete: true}, 
        {title: 'Đi tắm'}
      ]};
    
     
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item, isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const {todoItems} = this.state;
    return(
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem 
              key={index} 
              item={item} 
              click={this.onItemClick(item)}/>
          )
        }
        { todoItems.length === 0 && "Nothing here."}
      </div>
    );
  }
}

export default App;