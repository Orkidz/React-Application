import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';


class ToDo extends Component {

    render() { 
        // Looping through list and assigning each to a "tasks"
    return this.props.list.map((tasks) => (
        // ToDoItem component takes in our "tasks" object as a prop 
        // It also prompts a warning for items to have a unique id so
        // we pass in our "tasks.id" which was taken from "list: id" in
        // App.js and assigned to the "tasks" prop 
    <ToDoItem key={tasks.id} tasks={tasks} markComplete={this.props.markComplete} delTask={this.props.delTask} />

    ));
   }
  }

  ToDo.propTypes = {
      list: PropTypes.array.isRequired
  }
  
  export default ToDo;