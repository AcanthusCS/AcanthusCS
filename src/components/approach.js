import React from 'react';

import Leaves from '../components/leaves';

import styles from "../components/approach.module.scss";

class Approach extends React.Component {
  render () {
    return (
      <div id="approach" className={styles.approach}>
        <Leaves/>
        <div id="approach_content" className={styles.approachContent}>
          <h1>Approach</h1>
          <p>
            {this.props.data.text}
          </p>
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
