import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ToDo from './components/ToDo'
import Header from './components/pagedesign/header'
import AddTask from './components/addTask'
import { v4 as uuidv4 } from 'uuid';
import About from './components/routes/About';

class App extends Component {
  state = {
    list: [
        {
          id: uuidv4(),
          title: "Take out the trash",
          completed: false
        },
        {
          id: uuidv4(),
          title: "Do the dishes",
          completed: false
        },
        {
          id: uuidv4(),
          title: "Cash in winning lottery ticket",
          completed: false
        },
    ]
  }

  // Toggle Complete tasks from list
  markComplete = (id) => {
    this.setState({ ToDo: this.state.list.map(tasks => {
      if(tasks.id === id) {
        tasks.completed = !tasks.completed
      }
      return ToDo;
    }) });
  }

  // Delete Task from list
  delTask = (id) => {
    this.setState({ list: [...this.state.list.filter(tasks => tasks.id !== id)] });
  }

  // Add Reminder to the list
  AddTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ list: [...this.state.list, newTask] });
  }

  render() { 
  return (
  <Router>
    <div className="App">
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
              <AddTask AddTask={this.AddTask} />
              {/* Our ToDo component below has a prop "list" that we pass in */}
              <ToDo list={this.state.list} markComplete={this.markComplete} delTask={this.delTask}></ToDo>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
  );
 }
}

export default App;