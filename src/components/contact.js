import React from 'react';

import styles from "../components/contact.module.scss";

class Clients extends React.Component {
  render () {
    return (
      <div id="contact" className={styles.contact}>
        <h1>Contact</h1>
          <div className={styles.footer}>
            <span id="phone">
              {this.props.data.phone}
            </span>
            <span id="email">
              {this.props.data.email}
            </span>
            <span id="linkedin">
              {this.props.data.linkedin}
            </span>
          </div>
      </div>
    )
  }
}

export default Clients
