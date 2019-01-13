import React from 'react';

import logo from "../images/logo2.png"


import { FaAngleDown } from 'react-icons/fa';

import styles from "../components/landing.module.scss";

class Landing extends React.Component {
  render () {
    return (
      <div id="landing" className={styles.landing}>
        <div className={styles.landingContent}>
          <img src={logo} alt="logo" className={styles.logo}/>
          <div className={styles.line + " dark-blue"}/>
          <div className={styles.line + " light-blue"}/>
          <div className={styles.line + " light-green"}/>
          <div className={styles.line + " dark-green"}/>
          <h2 className={styles.landingText}>
            {this.props.data.text}
          </h2>
          <FaAngleDown className={styles.bounce}/>
        </div>
      </div>
    )
  }
}

export default Landing
