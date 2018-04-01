import React, { Component } from "react";

class ClientData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "card"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className={
          this.props.clientData.jcAuthHours -
            this.props.clientData.jcCurrentHours <=
            10 ||
          this.props.clientData.patAuthHours -
            this.props.clientData.patCurrentHours <=
            10
            ? "card bg-danger"
            : "card bg-success"
        }
      >
        <div className="card-header">{this.props.clientData.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            JC Hours Left:{" "}
            {this.props.clientData.jcAuthHours -
              this.props.clientData.jcCurrentHours}
          </li>
          <li className="list-group-item">
            PAT Hours Left:{" "}
            {this.props.clientData.patAuthHours -
              this.props.clientData.patCurrentHours}
          </li>
          <li className="list-group-item">
            JC Authorized Hours: {this.props.clientData.jcAuthHours}
          </li>
          <li className="list-group-item">
            PAT Authorized Hours: {this.props.clientData.patAuthHours}
          </li>
          <li className="list-group-item">
            Contract: {this.props.clientData.beginDate} to{" "}
            {this.props.clientData.endDate}
          </li>
          <li className="list-group-item">
            Tier: {this.props.clientData.tier}
          </li>
          <li className="list-group-item">
            Workplace Location: {this.props.clientData.workplaceLocation}
          </li>
          <li className="list-group-item">
            Active: {this.props.clientData.active === true ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    );
  }
}

export default ClientData;
