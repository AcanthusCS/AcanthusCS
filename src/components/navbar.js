import React from 'react'
import { Link } from 'gatsby'
import styles from "../components/navbar.module.scss";
import logo from "../images/logo2.png"

import { FaBars } from 'react-icons/fa';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={styles.navBar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <label htmlFor="menu_checkbox" className={styles.iconWrapper}> 
          <FaBars className={styles.menuIcon} />
        </label>
        <input 
          type='checkbox'
          id="menu_checkbox"
          name="menu_checkbox"
        />
        <div className={styles.menu}>
          <Link
            to="#"
          >
            <h4>Home</h4>
          </Link>
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
      </nav>
    )
  }
}

export default NavBar
