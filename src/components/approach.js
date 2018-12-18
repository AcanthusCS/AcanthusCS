import React from 'react';

import NavbarGap from "../components/navbargap";

import styles from "../components/approach.module.scss";

class Approach extends React.Component {
  render () {
    return (
      <div id="approach" className={styles.approach}>
        <NavbarGap/>
        <div id='approach_background' className={styles.approachBackground}> </div>
        <div id="approach_content" className={styles.approachContent}>
          <div className={styles.approachHead}>
            <h1>Approach</h1>
            <p>
              {this.props.data.text}
            </p>
          </div>
          <div className={styles.sections}>
            {this.props.data.sections.map( (section, sectionIndex) =>
              <div key={"approach_section_" + String(sectionIndex) }>
                <h3>{section.name}</h3>
                <p>{section.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Approach
