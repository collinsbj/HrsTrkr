import React, { Component } from "react";

class ClientList extends Component {
  renderClients() {
    return this.props.clientData.map(client => {
      return (
        <a
          key={"client" + client.id}
          onClick={this.props.changeClient}
          id={"client" + client.id}
          className={
            client.jcAuthHours - client.jcCurrentHours < 10 ||
            client.patAuthHours - client.patCurrentHours < 10
              ? "list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-danger"
              : "list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-success"
          }
        >
          {client.name}
          <span>JC: {client.jcAuthHours - client.jcCurrentHours}</span>
          <span>PAT: {client.patAuthHours - client.patCurrentHours}</span>
        </a>
      );
    });
  }

  render() {
    return <div className="list-group">{this.renderClients()}</div>;
  }
}

export default ClientList;
