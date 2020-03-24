import React, { Component } from "react";
class Filters extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" checked={this.props.hideCompleted} />
          Hide Completed
        </label>
      </div>
    );
  }
}

export default Filters;
