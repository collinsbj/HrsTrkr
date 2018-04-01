import React, { Component } from "react";

class AddEmployee extends Component {
  render() {
    return (
      <form onSubmit={this.props.addNewEmployee}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="allottedHours">Allotted Hours</label>
          <input type="text" className="form-control" id="allottedHours" />
        </div>
        <div className="form-group">
          <label htmlFor="beginDate">Begin Date</label>
          <input
            placeholder="eg 01-01-18"
            type="text"
            className="form-control"
            id="beginDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            placeholder="eg 02-01-18"
            type="text"
            className="form-control"
            id="endDate"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddEmployee;
