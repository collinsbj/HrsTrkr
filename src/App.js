import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import EmployeeDropdown from "./EmployeeDropdown";
import EmployeeData from "./EmployeeData";
import EmployeeForm from "./EmployeeForm";
import AddEmployee from "./AddEmployee";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Natalie Marvin",
          allottedHours: 40,
          beginDate: "03-01-18",
          endDate: "03-31-18",
          currentHours: 22
        },
        {
          name: "BJ Collins",
          allottedHours: 80,
          beginDate: "02-01-18",
          endDate: "04-31-18",
          currentHours: 75
        }
      ],
      currentEmployee: "none",
      addHours: 0,
      beginDate: "",
      endDate: "",
      allottedHours: 0,
      addEmployee: false
    };
    this.changeEmployee = this.changeEmployee.bind(this);
    this.changeHours = this.changeHours.bind(this);
    this.submitNewHours = this.submitNewHours.bind(this);
    this.changeBeginDate = this.changeBeginDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.submitNewDates = this.submitNewDates.bind(this);
    this.changeAllottedHours = this.changeAllottedHours.bind(this);
    this.submitNewAllottedHours = this.submitNewAllottedHours.bind(this);
    this.resetHours = this.resetHours.bind(this);
    this.goToAddEmployee = this.goToAddEmployee.bind(this);
    this.addNewEmployee = this.addNewEmployee.bind(this);
  }

  changeEmployee(event) {
    var currentEmployee = this.state.employees.filter(employee => {
      return employee.name === event.target.textContent;
    });
    this.setState({
      currentEmployee: currentEmployee[0],
      addEmployee: false
    });
  }

  changeHours(event) {
    this.setState({
      addHours: parseInt(event.target.value)
    });
  }

  submitNewHours() {
    var employeeState = this.state.employees;
    employeeState.forEach(employee => {
      if (employee.name === this.state.currentEmployee.name) {
        employee.currentHours += this.state.addHours;
      }
    });
    this.setState({
      employees: employeeState
    });
  }

  changeBeginDate(event) {
    this.setState({
      beginDate: event.target.value
    });
  }

  changeEndDate(event) {
    this.setState({
      endDate: event.target.value
    });
  }

  submitNewDates() {
    var employeeState = this.state.employees;
    employeeState.forEach(employee => {
      if (employee.name === this.state.currentEmployee.name) {
        employee.beginDate = this.state.beginDate;
        employee.endDate = this.state.endDate;
      }
    });
    this.setState({
      employees: employeeState
    });
  }

  changeAllottedHours(event) {
    console.log(event.target.value);
    this.setState({
      allottedHours: parseInt(event.target.value)
    });
  }

  submitNewAllottedHours() {
    var employeeState = this.state.employees;
    employeeState.forEach(employee => {
      if (employee.name === this.state.currentEmployee.name) {
        employee.allottedHours = this.state.allottedHours;
      }
    });
    this.setState({
      employees: employeeState
    });
  }

  resetHours() {
    var employeeState = this.state.employees;
    employeeState.forEach(employee => {
      if (employee.name === this.state.currentEmployee.name) {
        employee.currentHours = 0;
      }
    });
    this.setState({
      employees: employeeState
    });
  }

  goToAddEmployee() {
    this.setState({
      addEmployee: true,
      currentEmployee: "none"
    });
  }

  addNewEmployee(event) {
    event.preventDefault();
    var newEmployee = {
      name: event.target.name.value,
      allottedHours: parseInt(event.target.allottedHours.value),
      beginDate: event.target.beginDate.value,
      endDate: event.target.endDate.value,
      currentHours: 0
    };
    var employeeState = this.state.employees;
    employeeState.push(newEmployee);
    this.setState({
      employees: employeeState,
      addEmployee: false
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="h1">HrsTrkr</h1>
        </header>
        <EmployeeDropdown
          employeeData={this.state.employees}
          clickHandler={this.changeEmployee}
          goToAddEmployee={this.goToAddEmployee}
        />
        {this.state.currentEmployee !== "none" && (
          <div>
            <EmployeeData employeeData={this.state.currentEmployee} />
            <EmployeeForm
              changeHours={this.changeHours}
              submitNewHours={this.submitNewHours}
              changeBeginDate={this.changeBeginDate}
              changeEndDate={this.changeEndDate}
              submitNewDates={this.submitNewDates}
              changeAllottedHours={this.changeAllottedHours}
              submitNewAllottedHours={this.submitNewAllottedHours}
              resetHours={this.resetHours}
            />
          </div>
        )}
        {this.state.addEmployee === true && (
          <AddEmployee addNewEmployee={this.addNewEmployee} />
        )}
      </div>
    );
  }
}

export default App;
