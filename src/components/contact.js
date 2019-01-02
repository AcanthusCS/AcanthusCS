import React from 'react';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import styles from "../components/contact.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <div id="contact" className={styles.contact}>
        <h1>Contact</h1>
          <div className={styles.contactContent}>
            <div id="email">
              <a href={"mailto:" + this.props.data.email}>
                <FaEnvelope className={styles.icon}/>
              </a>
            </div>
            <div id="phone">
              <h3>{this.props.data.phone}</h3>
            </div>
            <div id="linkedin">
              <a href={this.props.data.linkedin}>
                <FaLinkedin className={styles.icon}/>
              </a>
            </div>
        </div>
      </div>
    )
  }
}

export default Clients
