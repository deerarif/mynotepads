import React, { Component } from "react";

class block extends Component {
  render() {
    return (
      <div className="container p-3 mb-3 border border-light border-1 rounded">
        <div className="row ">
          <div className="col-10  text-start">
            <h5>{this.props.judul}</h5>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={this.props.delete}
            ></button>
          </div>
        </div>
        <div className="row">
          <div className="col-10  text-start">{this.props.note_value}</div>
          <div className="col-2 "></div>
        </div>
      </div>
    );
  }
}
export default block;
