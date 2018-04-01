import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import ClientData from "./ClientData";
import ClientForm from "./ClientForm";
import AddClient from "./AddClient";
import ClientList from "./ClientList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: [
        {
          id: 1,
          name: "Natalie Marvin",
          jcAuthHours: 40,
          jcCurrentHours: 22,
          patAuthHours: 25,
          patCurrentHours: 12,
          beginDate: "03-01-18",
          endDate: "03-31-18",
          tier: 1,
          workplaceLocation: "100 South Street Fort Collins, CO 80525",
          active: true
        },
        {
          id: 2,
          name: "BJ Collins",
          jcAuthHours: 80,
          jcCurrentHours: 75,
          patAuthHours: 43,
          patCurrentHours: 22,
          beginDate: "02-01-18",
          endDate: "04-31-18",
          tier: 2,
          workplaceLocation: "300 North Street Greeley, CO 80538",
          active: true
        }
      ],
      jcCurrentHours: 0,
      patCurrentHours: 0,
      beginDate: "",
      endDate: "",
      jcAuthHours: 0,
      patAuthHours: 0,
      tier: "",
      workplaceLocation: "",
      currentClient: "none",
      addClient: false
    };
    this.goHome = this.goHome.bind(this);
    this.changeClient = this.changeClient.bind(this);
    this.changeJCHours = this.changeJCHours.bind(this);
    this.submitNewJCHours = this.submitNewJCHours.bind(this);
    this.changePATHours = this.changePATHours.bind(this);
    this.submitNewPATHours = this.submitNewPATHours.bind(this);
    this.changeBeginDate = this.changeBeginDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.submitNewDates = this.submitNewDates.bind(this);
    this.changeAuthJCHours = this.changeAuthJCHours.bind(this);
    this.submitNewAuthJCHours = this.submitNewAuthJCHours.bind(this);
    this.changeAuthPATHours = this.changeAuthPATHours.bind(this);
    this.submitNewAuthPATHours = this.submitNewAuthPATHours.bind(this);
    this.changeWorkplaceLocation = this.changeWorkplaceLocation.bind(this);
    this.submitNewWorkplaceLocation = this.submitNewWorkplaceLocation.bind(
      this
    );
    this.resetJCHours = this.resetJCHours.bind(this);
    this.resetPATHours = this.resetPATHours.bind(this);
    this.goToAddClient = this.goToAddClient.bind(this);
    this.addNewClient = this.addNewClient.bind(this);
    this.changeTier = this.changeTier.bind(this);
    this.submitNewTier = this.submitNewTier.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.makeInactive = this.makeInactive.bind(this);
  }

  goHome() {
    this.setState({
      currentClient: "none",
      addClient: false
    });
  }

  changeClient(event) {
    var currentClient = this.state.clients.filter(client => {
      return "client" + client.id === event.target.id;
    });
    this.setState({
      currentClient: currentClient[0],
      addClient: false
    });
  }

  changeJCHours(event) {
    this.setState({
      jcCurrentHours: parseInt(event.target.value, 10)
    });
  }

  submitNewJCHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.jcCurrentHours += this.state.jcCurrentHours;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  changePATHours(event) {
    this.setState({
      patCurrentHours: parseInt(event.target.value, 10)
    });
  }

  submitNewPATHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.patCurrentHours += this.state.patCurrentHours;
      }
    });
    this.setState({
      clients: clientState
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
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.beginDate = this.state.beginDate;
        client.endDate = this.state.endDate;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  changeAuthJCHours(event) {
    this.setState({
      jcAuthHours: parseInt(event.target.value, 10)
    });
  }

  submitNewAuthJCHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.jcAuthHours = this.state.jcAuthHours;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  changeAuthPATHours(event) {
    this.setState({
      patAuthHours: parseInt(event.target.value, 10)
    });
  }

  submitNewAuthPATHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.patAuthHours = this.state.patAuthHours;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  changeTier(event) {
    this.setState({
      tier: event.target.value
    });
  }

  submitNewTier() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.tier = this.state.tier;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  changeWorkplaceLocation(event) {
    this.setState({
      workplaceLocation: event.target.value
    });
  }

  submitNewWorkplaceLocation() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.workplaceLocation = this.state.workplaceLocation;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  resetJCHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.jcCurrentHours = 0;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  resetPATHours() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.patCurrentHours = 0;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  makeActive() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.active = true;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  makeInactive() {
    var clientState = this.state.clients;
    clientState.forEach(client => {
      if (client.name === this.state.currentClient.name) {
        client.active = false;
      }
    });
    this.setState({
      clients: clientState
    });
  }

  goToAddClient() {
    this.setState({
      addClient: true,
      currentClient: "none"
    });
  }

  addNewClient(event) {
    event.preventDefault();
    var newClient = {
      id: 3,
      name: event.target.name.value,
      jcAuthHours: parseInt(event.target.jcAuthHours.value, 10),
      jcCurrentHours: parseInt(event.target.jcCurrentHours.value, 10),
      patAuthHours: parseInt(event.target.patAuthHours.value, 10),
      patCurrentHours: parseInt(event.target.patCurrentHours.value, 10),
      beginDate: event.target.beginDate.value,
      endDate: event.target.endDate.value,
      tier: event.target.tier.value,
      workplaceLocation: event.target.workplaceLocation.value,
      active: true
    };
    var clientState = this.state.clients;
    clientState.push(newClient);
    this.setState({
      clients: clientState,
      addClient: false
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="h1">HrsTrkr</h1>
        </header>
        <button
          onClick={this.goHome}
          type="button"
          className="btn btn-outline-primary mainButton"
        >
          Home
        </button>
        {this.state.currentClient === "none" &&
          this.state.addClient === false && (
            <div>
              <ClientList
                clientData={this.state.clients}
                changeClient={this.changeClient}
              />
              <button
                onClick={this.goToAddClient}
                type="button"
                className="btn btn-outline-primary mainButton"
              >
                Add New Client
              </button>
            </div>
          )}
        {this.state.currentClient !== "none" && (
          <div>
            <ClientData clientData={this.state.currentClient} />
            <ClientForm
              clientData={this.state.currentClient}
              changeJCHours={this.changeJCHours}
              submitNewJCHours={this.submitNewJCHours}
              changePATHours={this.changePATHours}
              submitNewPATHours={this.submitNewPATHours}
              changeBeginDate={this.changeBeginDate}
              changeEndDate={this.changeEndDate}
              submitNewDates={this.submitNewDates}
              changeAuthJCHours={this.changeAuthJCHours}
              submitNewAuthJCHours={this.submitNewAuthJCHours}
              changeAuthPATHours={this.changeAuthPATHours}
              submitNewAuthPATHours={this.submitNewAuthPATHours}
              changeTier={this.changeTier}
              submitNewTier={this.submitNewTier}
              changeWorkplaceLocation={this.changeWorkplaceLocation}
              submitNewWorkplaceLocation={this.submitNewWorkplaceLocation}
              resetJCHours={this.resetJCHours}
              resetPATHours={this.resetPATHours}
              makeActive={this.makeActive}
              makeInactive={this.makeInactive}
            />
          </div>
        )}
        {this.state.addClient === true && (
          <AddClient addNewClient={this.addNewClient} />
        )}
      </div>
    );
  }
}

export default App;
