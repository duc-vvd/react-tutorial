import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
    render() {
        const {item, click} = this.props;// {item: item}={item: obj} or item = this.props.item
        
        
        let url = checkImg;
        if(item.isComplete) {
            url = checkCompleteImg;
        }

        return(
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete === true
            })}>
                <img onClick={click} src={url} width={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;