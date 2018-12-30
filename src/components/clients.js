import React from 'react';

import { withPrefix } from 'gatsby'

import styles from "../components/clients.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <div id="clients" className={styles.clients}>
        <div id="clientscontent" className={styles.clientsContent}>
          <h1>Clients</h1>
            {this.props.data.map( (client, clientIndex) =>
              <div key={String(clientIndex) + "client"} className={styles.clientEndorsement}>
                <div className={styles.clientLogoContainer}>
                  <img
                    src={withPrefix('/img/' + client.logo)} 
                    alt={client.company + " logo"} 
                    className={styles.clientLogo}
                  />
                </div>
                <div className={styles.clientText}>
                  <p> {client.text} </p>
                  <h4> {client.name} </h4>
                  <h4> {client.title} </h4>
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Clients
