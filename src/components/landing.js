import React from 'react';

import styles from "../components/landing.module.scss";

class Landing extends React.Component {
  render () {
    return (
      <div id="landing" className={styles.landing}>
        <h1 className={styles.landingText}>
          {this.props.data.text}
        </h1>
      </div>
    )
  }
}

export default Landing
