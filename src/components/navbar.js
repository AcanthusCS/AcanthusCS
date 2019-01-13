import React from 'react'
import { Link } from 'gatsby'
import styles from "../components/navbar.module.scss";
import logo from "../images/logo2.png"

import { FaBars } from 'react-icons/fa';

class NavBar extends React.Component {

  uncheck() {
    document.getElementById("menu_checkbox").checked = false;
  }

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
            onClick={this.uncheck}
          >
            <h4>Home</h4>
          </Link>
          <Link
            to="#approach"
            onClick={this.uncheck}
          >
            <h4>Approach</h4>
          </Link>
          <Link
            to="#clients"
            onClick={this.uncheck}
          >
            <h4>Clients</h4>
          </Link>
          <Link
            to="#about"
            onClick={this.uncheck}
          >
            <h4>About</h4>
          </Link>
          <Link
            to="#contact"
            onClick={this.uncheck}
          >
            <h4>Contact</h4>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBar
