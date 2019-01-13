import React from 'react';

import ryan from "../images/ryan_v3.jpg"
import ryanSmall from "../images/ryan_small.jpg"

import styles from "../components/about.module.scss";

class About extends React.Component {
  render () {
    return (
      <div id="about" className={styles.about + " light-green"}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              {this.props.data.text.map( (text, sectionIndex) =>
                <p key={"about_sentance_" + String(sectionIndex)}>
                  {text.sentance}
                </p>
              )}
              <div className={styles.aboutEnd}>
                <img src={ryanSmall} alt="ryan" className={styles.ryanSmall}/>
                <div>
                  <h4>{this.props.data.name}</h4>
                  <h4>{this.props.data.title}</h4>
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src={ryan} alt="ryan" className={styles.ryan}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
