import React, { Component } from "react";

class EmployeeForm extends Component {
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add hours"
            aria-label="Add hours"
            aria-describedby="basic-addon2"
            onChange={this.props.changeHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewHours}
            >
              Add
            </button>
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Contract Dates
            </span>
          </div>
          <input
            placeholder="Begin"
            type="text"
            className="form-control"
            onChange={this.props.changeBeginDate}
          />
          <input
            placeholder="End"
            type="text"
            className="form-control"
            onChange={this.props.changeEndDate}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewDates}
            >
              Update
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Change allotted hours"
            aria-label="Change allotted hours"
            aria-describedby="basic-addon2"
            onChange={this.props.changeAllottedHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewAllottedHours}
            >
              Update
            </button>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.props.resetHours}
        >
          Reset Hours
        </button>
      </div>
    );
  }
}

export default EmployeeForm;
