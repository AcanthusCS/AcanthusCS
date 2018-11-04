import React from 'react'
import { Link } from 'gatsby'
import styles from "../components/header.module.scss";
import Logo from "../components/logo.js"

import { FaBars, FaClose } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <Link
          to="#landing"
          className={styles.logo}
        >
          <Logo/>
        </Link>
        <div className={styles.navBar}>
          <Link
            to="#approach"
          >
            Approach
          </Link>
          <Link
            to="#clients"
          >
            Clients
          </Link>
          <Link
            to="#about"
          >
            About
          </Link>
          <Link
            to="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
