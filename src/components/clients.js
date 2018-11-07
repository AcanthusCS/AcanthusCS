import React from 'react';

import styles from "../components/clients.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <div id="clients" className={styles.clients}>
        <h1>Clients</h1>
          {this.props.data.map( (client, clientIndex) =>
            <div key={String(clientIndex) + "client"}>
              <span> {client.name} </span>
              <span> {client.text} </span>
            </div>
          )}
      </div>
    )
  }
}

export default Clients
