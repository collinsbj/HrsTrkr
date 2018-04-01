import React, { Component } from "react";

class EmployeeData extends Component {
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
          this.props.employeeData.allottedHours -
            this.props.employeeData.currentHours <=
          10
            ? "card bg-danger"
            : "card"
        }
      >
        <div className="card-header">{this.props.employeeData.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Hours Left:{" "}
            {this.props.employeeData.allottedHours -
              this.props.employeeData.currentHours}
          </li>
          <li className="list-group-item">
            Alotted Hours: {this.props.employeeData.allottedHours}
          </li>
          <li className="list-group-item">
            Contract: {this.props.employeeData.beginDate} to{" "}
            {this.props.employeeData.endDate}
          </li>
        </ul>
      </div>
    );
  }
}

export default EmployeeData;
