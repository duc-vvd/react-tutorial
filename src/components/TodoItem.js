import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
    render() {
        const {item, onClick} = this.props;// {item: item}={item: obj} or item = this.props.item
        
        
        let url = checkImg;
        if(item.isComplete) {
            url = checkCompleteImg;
        }

        return(
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete === true
            })}>
                <img onClick={onClick} src={url} width={32}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};

export default TodoItem;