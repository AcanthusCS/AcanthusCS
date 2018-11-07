import React from 'react';

import Ryan from   '../components/ryan';
import styles from "../components/about.module.scss";

class About extends React.Component {
  render () {
    return (
      <div id="about" className={styles.about}>
        <Ryan/>
        <div className={styles.aboutText}>
          <h1>About</h1>
          <p>
            {this.props.data.text}
          </p>
        </div>
      </div>
    )
  }
}

export default About
