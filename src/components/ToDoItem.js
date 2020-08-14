import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class ToDoItem extends Component {
    // This is a style function used for when the to do list items
    // are completed or not
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: '1px #ccc dotted',
       textDecoration: this.props.tasks.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.tasks;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> 
                    {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTask.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

ToDoItem.propTypes = {
    tasks: PropTypes.object.isRequired
}

// Variable use to store styling for button
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
