import React from 'react';

import { withPrefix } from 'gatsby'

import styles from "../components/clients.module.scss";

class Clients extends React.Component {

  getLogo(logoName=null) {
    if (logoName) {
      return (
        <div className={styles.logoContainer}>
          <img
            src={withPrefix('/img/' + logoName)} 
            alt={logoName + " logo"} 
            className={styles.clientLogo}
          />
        </div>
      )
    }
    else {
      return (
        <div className={styles.logoContainer}>
          <div className={styles.line + " dark-blue"}/>
          <div className={styles.line + " light-blue"}/>
          <div className={styles.line + " light-green"}/>
          <div className={styles.line + " dark-green"}/>
        </div>
      )
    }
  }

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
                  {console.log(client)}
                  <p> {client.text} </p>
                  <div className={styles.clientEndorsementAfter}>
                    {this.getLogo(client.logo || null)}
                    <div className={styles.clientText}>
                      <h4> {client.name || client.company} </h4>
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
