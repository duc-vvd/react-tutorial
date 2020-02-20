import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return(
            <div className="TodoItem">
                <h2>Todo List</h2>
                <p>Đi chợ</p>
                <p>Nấu cơm</p>
            </div>
        );
    }
}

export default TodoItem;