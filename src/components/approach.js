import React from 'react';

import { FaAngleDown } from 'react-icons/fa';

import styles from "../components/approach.module.scss";

class Approach extends React.Component {
  render () {
    return (
      <>
      <div id="approach" className={styles.approach + " light-green"}>
        <div id="approach_content" className={styles.approachContent}>
          <div id='approach_text' className={styles.approachText}>
            <div>
              <h1>Approach</h1>
              <blockquote>
                {this.props.data.text}
              </blockquote>
            </div>
            {this.props.data.sections.map( (section, sectionIndex) =>
              <div key={"approach_" + String(sectionIndex)} className={styles.approachSection}>
                <input 
                  type='checkbox' 
                  id={"approach_input_" + String(sectionIndex)} 
                  name={"approach_input_" + String(sectionIndex)}
                />
                <label htmlFor={"approach_input_" + String(sectionIndex)}> 
                  <h3>{section.name}</h3>
                  <FaAngleDown className={styles.sectionArrow}/>
                </label>
                <div className={styles.collapsable}>
                  <p>{section.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="green-to-blue page-transition"></div>
      </>
    )
  }
}

export default Approach
