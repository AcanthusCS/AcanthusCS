import React from 'react'
import { Link } from 'gatsby'
import styles from "../components/header.module.scss";
import logo from "../images/logo2.png"

import { FaBars, FaClose } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <div className={styles.navBar}>
          <Link
            to="#approach"
          >
            <h4>Approach</h4>
          </Link>
          <Link
            to="#clients"
          >
            <h4>Clients</h4>
          </Link>
          <Link
            to="#about"
          >
            <h4>About</h4>
          </Link>
          <Link
            to="#contact"
          >
            <h4>Contact</h4>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
