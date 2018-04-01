import React, { Component } from "react";

class ClientForm extends Component {
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="JC Hours Worked"
            aria-label="JC Hours Worked"
            aria-describedby="basic-addon2"
            onChange={this.props.changeJCHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewJCHours}
            >
              Add
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="PAT Hours Worked"
            aria-label="PAT Hours Worked"
            aria-describedby="basic-addon2"
            onChange={this.props.changePATHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewPATHours}
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
            placeholder="Change Authorized JC hours"
            aria-label="Change Authorized JC hours"
            aria-describedby="basic-addon2"
            onChange={this.props.changeAuthJCHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewAuthJCHours}
            >
              Update
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Change Authorized PAT hours"
            aria-label="Change Authorized PAT hours"
            aria-describedby="basic-addon2"
            onChange={this.props.changeAuthPATHours}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewAuthPATHours}
            >
              Update
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Change Tier"
            aria-label="Change Tier"
            aria-describedby="basic-addon2"
            onChange={this.props.changeTier}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewTier}
            >
              Update
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Change Workplace Location"
            aria-label="Change Workplace Location"
            aria-describedby="basic-addon2"
            onChange={this.props.changeWorkplaceLocation}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.submitNewWorkplaceLocation}
            >
              Update
            </button>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary mainButton"
          onClick={this.props.resetJCHours}
        >
          Reset JC Hours
        </button>
        <button
          type="button"
          className="btn btn-secondary mainButton"
          onClick={this.props.resetPATHours}
        >
          Reset PAT Hours
        </button>

        {this.props.clientData.active === true ? (
          <button
            onClick={this.props.makeInactive}
            type="button"
            className="btn btn-danger mainButton"
          >
            Make Inactive
          </button>
        ) : (
          <button
            onClick={this.props.makeActive}
            type="button"
            className="btn btn-success mainButton"
          >
            Make Active
          </button>
        )}
      </div>
    );
  }
}

export default ClientForm;
