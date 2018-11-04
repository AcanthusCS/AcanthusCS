import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


import Layout from '../components/layout';
import Leaves from '../components/leaves';
import Ryan from '../components/Ryan';
import styles from "../pages/index.module.scss";

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query DataQuery {
          allDataYaml {
            edges{
              node {
                landing {
                  text
                }
                approach {
                  text
                  sections {
                    name
                    text
                  }
                }
                clients {
                  name
                  text
                }
                about {
                  text
                }
                contact {
                  phone
                  email
                  linkedin
                }
              }
            }
          }
        }
      `}
      render={data => (
        data.allDataYaml.edges.map( edge =>
          <div key="main" className={styles.layout}>
            <div id="landing" className={styles.landing}>
              <Leaves/>
              <h1 className={styles.landingText}>
                {edge.node.landing.text}
              </h1>
            </div>
            <div id="approach" className={styles.approach}>
              <h1>Approach</h1>
              <p>
                {edge.node.approach.text}
              </p>
              <div className={styles.sections}>
                {edge.node.approach.sections.map( (section, sectionIndex) =>
                  <div key={"approch_section_" + String(sectionIndex) }>
                    <h3>{section.name}</h3>
                    <p>{section.text}</p>
                  </div>
                )}
              </div>
            </div>
            <div id="clients" className={styles.clients}>
              <h1>Clients</h1>
                {edge.node.clients.map( (client, clientIndex) =>
                  <div key={String(clientIndex) + "client"}>
                    <span> {client.name} </span>
                    <span> {client.text} </span>
                  </div>
                )}
            </div>
            <div id="about" className={styles.about}>
              <Ryan/>
              <div className={styles.aboutText}>
                <h1>About</h1>
                <p>
                  {edge.node.about.text}
                </p>
              </div>
            </div>
            <div id="contact" className={styles.contact}>
              <h1>Contact</h1>
                <div className={styles.footer}>
                  <span id="phone">
                    {edge.node.contact.phone}
                  </span>
                  <span id="email">
                    {edge.node.contact.email}
                  </span>
                  <span id="linkedin">
                    {edge.node.contact.linkedin}
                  </span>
                </div>
            </div>
          </div>
        )
      )}
    />
  </Layout>
)

export default IndexPage
