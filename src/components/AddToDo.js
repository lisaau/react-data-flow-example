import React, { Component } from "react";
class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            created: new Date(),
            isCompleted: false,
            id: 3
        }
    }
    render() {
        console.log({text: this.state.text, created: this.state.created, isCompleted: this.state.isCompleted, id: this.state.id});
        
        return (
        <form onSubmit={ e => {
            this.props.onAdd(
                {text: this.state.text, created: this.state.created, isCompleted: this.state.isCompleted, id: this.state.id}
            )
            }}>
            <label>
                Add to do: <textarea value={this.state.value} onChange={e => this.setState({text: e.target.value})} />
            </label>

            <input type="submit" value="Submit" />
        </form>    
        )
    }
}

export default AddToDo