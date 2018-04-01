import React, { Component } from "react";

class EmployeeDropdown extends Component {
  constructor(props) {
    super(props);
    this.getEmployees = this.getEmployees.bind(this);
  }

  getEmployees() {
    return this.props.employeeData.map(employee => {
      return (
        <a
          className="dropdown-item"
          onClick={this.props.clickHandler}
          key={employee.name}
        >
          {employee.name}
        </a>
      );
    });
  }

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Employees
        </button>
        <div className="dropdown-menu">
          {this.getEmployees()}
          <a className="dropdown-item" onClick={this.props.goToAddEmployee}>
            Add New Employee
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeDropdown;
