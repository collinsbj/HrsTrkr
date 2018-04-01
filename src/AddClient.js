import React, { Component } from "react";

class AddClient extends Component {
  render() {
    return (
      <form onSubmit={this.props.addNewClient}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="jcCurrentHours">JC Hours Worked</label>
          <input type="text" className="form-control" id="jcCurrentHours" />
        </div>
        <div className="form-group">
          <label htmlFor="jcAuthHours">JC Hours Authorized</label>
          <input type="text" className="form-control" id="jcAuthHours" />
        </div>
        <div className="form-group">
          <label htmlFor="patCurrentHours">PAT Hours Worked</label>
          <input type="text" className="form-control" id="patCurrentHours" />
        </div>
        <div className="form-group">
          <label htmlFor="patAuthHours">PAT Hours Authorized</label>
          <input type="text" className="form-control" id="patAuthHours" />
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
        <div className="form-group">
          <label htmlFor="tier">Tier</label>
          <input type="text" className="form-control" id="tier" />
        </div>
        <div className="form-group">
          <label htmlFor="workplaceLocation">Workplace Location</label>
          <input type="text" className="form-control" id="workplaceLocation" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddClient;
