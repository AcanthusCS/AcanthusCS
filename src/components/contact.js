import React from 'react';


import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import styles from "../components/contact.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <div id="contact" className={styles.contact}>
        <div className  ={styles.contactCenter}>
          <div className={styles.contactContent}>
            <h1>Contact</h1>
            <div id="phone">
              <h3>{this.props.data.phone}</h3>
            </div>
            <div id="email">
              <FaEnvelope className={styles.icon}/>
            </div>
            <div id="linkedin">
              <FaLinkedin className={styles.icon}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
