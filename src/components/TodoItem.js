import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {

    render() {
        const {item} = this.props;// {item: item}={item: obj} or item = this.props.item
        
        return(
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete === true
            })}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;