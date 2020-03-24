import React, { Component } from "react";
class Filters extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.props.completedHidden}
            onChange={this.props.toggleHideCompleted}
          />
          Hide Completed
        </label>
      </div>
    );
  }
}

export default Filters;
