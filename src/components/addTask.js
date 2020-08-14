import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTask(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ dislay: 'flex' }}>
                <input type="text" name="title" style={{ width: '80%', padding: '7px', borderStyle: 'double', borderColor: 'red'}} placeholder="Enter New Reminder..." onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{ width: '20%', padding: '6px', borderStyle: 'double', borderColor: 'red' }} /> 
            </form>
        )
    }
}

export default AddTask;
