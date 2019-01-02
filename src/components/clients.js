import React from 'react';

import { withPrefix } from 'gatsby'

import styles from "../components/clients.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <>
      <div id="clients" className={styles.clients + " light-blue"}>
        <div id="clientscontent" className={styles.clientsContent}>
          <div className={styles.clientTextContainer}>
            <div className={styles.clientNameContainer}>
              <h1>Clients</h1>
            </div>
            {this.props.data.map( (client, clientIndex) =>
              <div key={String(clientIndex) + "client"} className={styles.clientEndorsement}>
                <p> {client.text} </p>
                <div className={styles.clientEndorsementAfter}>
                  <div className={styles.clientLogoContainer}>
                    <img
                      src={withPrefix('/img/' + client.logo)} 
                      alt={client.company + " logo"} 
                      className={styles.clientLogo}
                    />
                  </div>
                  <div className={styles.clientText}>
                    <h4> {client.name} </h4>
                    <h4> {client.title} </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="blue-to-green page-transition"></div>
      </>
    )
  }
}

export default Clients
